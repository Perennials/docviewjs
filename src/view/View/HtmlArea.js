"use strict";

(function () {

	/**
	 * A view containing free-form HTML.
	 * @def class View.HtmlArea extends View
	 * @author Borislav Peev <borislav.asdf@gmail.com>
	 */

	/**
	 * @def constructor View.HtmlArea ( html )
	 * @param string HTML content of the view.
	 */
	View.HtmlArea = function ( html ) {
		View.call( this );
		var handle = this._element;
		handle.classList.add( 'HtmlArea' );
		if ( html ) {
			this.setHtml( html );
		}
	};

	/**
	 * @private
	 */
	View.HtmlArea.defineStatic( {
		fromTemplate: function ( element ) {
			var html = '';
			var ser = View.HtmlArea._serializer || ( View.HtmlArea._serializer = new XMLSerializer() );
			var child = element.firstChild;
			while ( child ) {
				html += ser.serializeToString( child );
				child = child.nextSibling;
			}
			var ret = new View.HtmlArea( html );
			ViewTemplate.setupViewFromAttributes( ret, element );
			return ret;
		}
	} );

	var RE_VIEW = /(<\/?)view:([a-z\-]+)/gi;
	function RECB_VIEW ( m, m1, tag ) {
		var tags = tag.split( '-' );
		for ( var i = tags.length - 1; i >= 0; --i ) {
			var t = tags[i];
			tags[i] = t.charAt( 0 ).toUpperCase() + t.substr( 1 );
		}
		return m1 + tags.join();
	}

	function _findViews ( element ) {
		var el = element.firstElementChild;
		while ( el ) {
			if ( el.localName.startsWith( 'view:' ) ) {
				var html = el.outerHTML.replace( RE_VIEW, RECB_VIEW );
				var newel = ViewTemplate.loadString( html ).createView().getElement();
				el = el.parentNode.replaceChild( newel, el );
			}
			else {
				_findViews( el );
			}
			el = el.nextElementSibling;
		}
	}

	View.HtmlArea.extend( View, {

		/**
		 * @unstable
		 */
		setHtml: function ( html ) {
			this._element.innerHTML = html;
			_findViews( this._element );
			return this;
		},

		/**
		 * @unstable
		 */
		getHtml: function ( html ) {
			return this._element.innerHTML;
		}
	} );

	/*@UNITESTS*/
	Unitest( 'HtmlArea', function () {

		var t = ViewTemplate.loadString( '<View.HtmlArea><h1>header</h1></View.HtmlArea>' );
		var h = View.HtmlArea.fromTemplate( t.getDocument().firstChild );
		test( h instanceof View.HtmlArea );
		test( h.getElement().innerHTML == '<h1>header</h1>' );

	} );
	/*UNITESTS@*/

})( this );