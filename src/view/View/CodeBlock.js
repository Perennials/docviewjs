"use strict";



/**
 * A view containing pre-format text, usually code.
 * @def class View.CodeBlock extends View
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * @def constructor View.CodeBlock ( content )
 * @param string HTML content of the view.
 */
View.CodeBlock = function ( content ) {
	View.call( this, 'code' );
	var handle = this._element;
	handle.classList.add( 'CodeBlock' );
	if ( content ) {
		this.setText( content );
	}
};

/**
 * @private
 */
View.CodeBlock.defineStatic( {
	fromTemplate: function ( element ) {
		var html = '';
		var ser = View.CodeBlock._serializer || ( View.CodeBlock._serializer = new XMLSerializer() );
		var child = element.firstChild;
		while ( child ) {
			html += ser.serializeToString( child );
			child = child.nextSibling;
		}
		var ret = new View.CodeBlock( element.textContent );
		ViewTemplate.setupViewFromAttributes( ret, element );
		return ret;
	}
} );

View.CodeBlock.extend( View );

/*@UNITESTS*/
Unitest( 'CodeBlock', function () {

	var t = ViewTemplate.loadString( '<View.CodeBlock><![CDATA[<h1>header</h1>]]></View.CodeBlock>' );
	var h = View.CodeBlock.fromTemplate( t.getDocument().firstChild );
	test( h instanceof View.CodeBlock );
	test( h.getText() == '<h1>header</h1>' );

} );
/*UNITESTS@*/