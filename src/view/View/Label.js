"use strict";



/**
 * Label is a view made of image and text.
 * Both the image and the text are optional.
 * @def class View.Label extends View mixin TLabel
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * @def constructor View.Label ( options:Object|undefined )
 * @param Object with predefined properties to set using {@see ViewTemplate.setupViewFromProperties()}.
 */
View.Label = function ( options ) {
	View.call( this );
	View.TLabel.call( this );
	this._element.classList.add( 'Label' );
	if ( options ) {
		ViewTemplate.setupViewFromProperties( this, options );
	}
};

View.Label.extend( View ).mixin( View.TLabel, ResolveMixins( { 'setText': View.TLabel } ) );