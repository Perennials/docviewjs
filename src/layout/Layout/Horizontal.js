"use strict";



/**
 * Layout where child views are ordered horizontally.
 * @def class Layout.Horizontal extends Layout
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
Layout.Horizontal = function ( view ) {
	Layout.call( this, view );
	view.getElement().classList.add( 'Horizontal' );
};

Layout.Horizontal.extend( Layout, {

	/**
	 * @inheritdoc
	 * @def function Layout.Horizontal.detach ()
	 */
	detach: function () {
		this._view.getElement().classList.remove( 'Horizontal' );
		Layout.prototype.detach.call( this );
	}
} );


/**
 * Flexible Layout where child views are ordered horizontally.
 * @def class Layout.HorizontalFlex extends Layout.Horizontal
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
Layout.HorizontalFlex = function ( view ) {
	Layout.Horizontal.call( this, view );
	view.getElement().classList.add( 'flex' );
}

Layout.HorizontalFlex.extend( Layout.Horizontal, {
	detach: function () {
		this._view.getElement().classList.remove( 'flex' );
		Layout.Horizontal.prototype.detach.call( this );
	}
} );

/*@UNITESTS*/
Unitest( 'Layout.Horizontal()/Layout.Horizontal.detach()', function () {

	var v = new View();
	var lay = new Layout.Horizontal( v );
	test( v.getElement().classList.contains( 'Horizontal' ) );
	
	lay.detach();
	test( !v.getElement().classList.contains( 'Horizontal' ) );
});
/*UNITESTS@*/