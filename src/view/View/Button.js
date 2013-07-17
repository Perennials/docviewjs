"use strict";



/**
 * @def class View.Button extends View mixin TLabel
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * @def constructor View.Label ( options:Object|undefined )
 * @param Object with predefined properties to set using {@see ViewTemplate.setupViewFromProperties()}.
 */
View.Button = function ( options ) {
	View.call( this, 'button' );
	View.TLabel.call( this );
	var classlist = this._element.classList;
	classlist.add( 'TLabel' );
	classlist.add( 'Button' );
	if ( options ) {
		ViewTemplate.setupViewFromProperties( this, options );
	}
};

View.Button.extend( View, {
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