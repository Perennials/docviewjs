"use strict";



/**
 * Layout where child views are ordered vertically.
 * This is the defaul browser layout.
 * @def class Layout.Vertical extends Layout
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
Layout.Vertical = function ( view ) {
	Layout.call( this, view );
	view.getElement().classList.add( 'Vertical' );
};

Layout.Vertical.extend( Layout, {

	/**
	 * @inheritdoc
	 * @def function Layout.Vertical.detach ()
	 */
	detach: function () {
		this._view.getElement().classList.remove( 'Vertical' );
		Layout.prototype.detach.call( this );
	}
} );


/**
 * Flexible Layout where child views are ordered vertically.
 * @def class Layout.VerticalFlex extends Layout.Vertical
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
Layout.VerticalFlex = function ( view ) {
	Layout.Vertical.call( this, view );
	view.getElement().classList.add( 'flex' );
}

Layout.VerticalFlex.extend( Layout.Vertical, {
	detach: function () {
		this._view.getElement().classList.remove( 'flex' );
		Layout.Vertical.prototype.detach.call( this );
	}
} );


/*@UNITESTS*/
Unitest( 'Layout.Vertical()/Layout.Vertical.detach()', function () {

	var v = new View();
	var lay = new Layout.Vertical( v );
	test( v.getElement().classList.contains( 'Vertical' ) );
	
	lay.detach();
	test( !v.getElement().classList.contains( 'Vertical' ) );
});
/*UNITESTS@*/