"use strict";


/**
 * Tab is an child view in a {@see View.TabStrip}.
 * @see View.TabStrip
 * @see View.TabView
 * @def class View.Tab extends View
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * @def constructor View.Tab ( options:Object|undefined )
 * @param Object with predefined properties to set using {@see ViewTemplate.setupViewFromProperties()}.
 */
View.Tab = function ( options ) {
	View.call( this );
	View.TLabel.call( this );
	var classlist = this._element.classList;
	classlist.add( 'Label' );
	classlist.add( 'Tab' );
	if ( options ) {
		ViewTemplate.setupViewFromProperties( this, options );
	}
};

View.Tab.extend( View ).mixin( View.TLabel, ResolveMixins( { 'setText': View.TLabel } ) );