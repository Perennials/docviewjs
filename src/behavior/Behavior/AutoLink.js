"use strict";



(function ( exports ) {

	/**
	 * Automatic behavior for {@see View.Link}.
	 * This behavior will listen for click events and open the url of the link.
	 * @def class Behavior.AutoLink extends Behavior
	 * @author Borislav Peev <borislav.asdf@gmail.com>
	 */

	 //private
	var _clickHandler = null;
	function _getClickHandler () {
		return ( _clickHandler || ( _clickHandler = new EventListener( 'click', function ( evt ) {
			var target = this.getTarget();
			if ( target ) {
				window.open( this.getUrl(), target );
			}
			else {
				window.location.href = this.getUrl();
			}
			//evt.preventDefault();
		}, 'bubble' ) ) );
	}
	
	/**
	 * @def constructor Behavior.AutoLink( link )
	 * @param View.Link
	 */
	function AutoLink ( link ) {
		this._link = link;
		this._onClick = _getClickHandler().add( link );
	}

	AutoLink.extend( Behavior, {
		/**
		 * @def private var Behavior.AutoLink._link
		 * @var View.Link
		 */
		
		/**
		 * @def private var Behavior.AutoLink._onClick
		 * @var EventListener
		 */

		detach: function () {
			this._onClick.remove( this._link );
			this._onClick = null;
			this._link = null;
		}
	} );

	View.Link.prototype.AutoBehavior = AutoLink;

	exports.AutoLink = AutoLink;

})( this.Behavior );