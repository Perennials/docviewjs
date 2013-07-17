"use strict";



(function ( exports ) {

	//private
	function isFromAccordionTitle ( element ) {
		var prev = element;
		while ( element && !( element._view instanceof View.Accordion ) ) {
			if ( element.classList.contains( 'AccordionItem' ) ) {
				if ( prev.classList.contains( 'AccordionItemTitle' ) ) {
					return element._view;
				}
				else {
					break;
				}
			}
			else {
				prev = element;
				element = element.parentNode;
			}
		}
		return false;
	}

	/**
	 * Automatic behavior for {@see View.Accordion}.
	 * This behavior will listen for clicks in .AccordionItem's and activate them.
	 * @def class Behavior.AutoAccordion extends Behavior
	 * @author Borislav Peev <borislav.asdf@gmail.com>
	 */
	
	/**
	 * @def constructor Behavior.AutoAccordion ( view )
	 * @param View.Accordion
	 */
	function AutoAccordion ( view ) {
		this._accordion = view;
		this._onClick = new EventListener( 'click', function ( evt ) {
			var accItem = isFromAccordionTitle( evt.target );
			if ( accItem !== false ) {
				view.setActive( view.getActive() !== accItem && !accItem.hasState( 'disabled' ) ? accItem : null );
				evt.preventDefault();
			}
		}, 'bubble' ).add( view );
	}

	AutoAccordion.extend( Behavior, {

		/**
		 * @def private var Behavior.AutoAccordion._onClick
		 * @var EventListener
		 */

		/**
		 * @def private var Behavior.AutoAccordion._accordion
		 * @var View.Accordion
		 */

		detach: function () {
			this._onClick().remove( this._accordion );
			this._onClick = null;
			this._accordion = null;
		}
	} );

	View.Accordion.prototype.AutoBehavior = AutoAccordion;

	exports.AutoAccordion = AutoAccordion;

})( this.Behavior );


/*@UNITESTS*/
Unitest( 'AutoAccordion()', function () {
	var v = new View.Accordion();
	v.setBehavior( 'auto' );
	var t1 = new View.AccordionItem();
	var v1 = new View();
	v1.setClass( 'AccordionItemTitle' );
	t1.addView( v1 );
	t1.addView( new View() );
	var t2 = new View.AccordionItem();
	var v2 = new View();
	v2.setClass( 'AccordionItemTitle' );
	t2.addView( v2 );
	t2.addView( new View() );
	v.addView( t1 );
	v.addView( t2 );
	document.body.appendChild( v.getElement() );

	test( v.getActive() === null );

	v1.getElement().click();
	test( v.getActive() === t1 );

	v2.getElement().click();
	test( v.getActive() === t2 );

	document.body.removeChild( v.getElement() );
} );
/*UNITESTS@*/