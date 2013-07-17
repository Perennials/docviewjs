"use strict";



/**
 * @def class View.Link extends View mixin TLabel
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * @def constructor View.Label ( options:Object|undefined )
 * @param Object with predefined properties to set using {@see ViewTemplate.setupViewFromProperties()}.
 */
View.Link = function ( options ) {
	View.call( this, 'button' );
	View.TLabel.call( this );
	var classlist = this._element.classList;
	classlist.add( 'TLabel' );
	classlist.add( 'Link' );
	if ( options ) {
		ViewTemplate.setupViewFromProperties( this, options );
	}
};

/**
 * @private
 */
View.Link.defineStatic( {
	fromTemplate: function ( element ) {
		var ret = ViewTemplate.classFromTemplate( View.Link, element );
		if ( element.getAttribute( 'behavior' ) !== '' ) {
			ret.setBehavior( 'auto' );
		}
		return ret;
	}
} );

View.Link.extend( View, {
	/**
	@unstable
	*/
	setUrl: function ( url ) {
		this._url = url;
		return this;
	},

	/**
	@unstable
	*/
	getUrl: function () {
		return this._url;
	},

	/**
	@unstable
	*/
	setTarget: function ( target ) {
		this._target = target;
		return this;
	},

	/**
	@unstable
	*/
	getTarget: function () {
		return this._target;
	},

	setState: function ( state, set ) {
		if ( state == 'disabled' ) {
			if ( set === false ) {
				this._element.removeAttribute( 'disabled' );
			}
			else {
				this._element.setAttribute( 'disabled', 'disabled' );
			}
		}
		return View.prototype.setState.call( this, state, set );
	}
} ).mixin( View.TLabel, ResolveMixins( { 'setText': View.TLabel } ) );