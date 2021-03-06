"use strict";


/**
 * @def class View implements EventTarget uses TEventDispatcher2
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */

/**
 * Constructs a new View from existing DOM element or a newly created one.
 * The function will add a "_view" property to the undelying HTMLElement to point to the View object.
 * Using '_view' member added to the HTMLElement is document for troubleshooting purposes, not to
 * encourage its use. This is not to be considered a "documented feature" and compatibility
 * for future version will not be considered.
 * @def constructor View ( element )
 * @param HTMLElement|string|undefined HTMLElement to be associated as view's element,
 * or string representing a tag name to create a new element. If none of these is provided
 * a new 'div' element will used as view's underlying element.
 */
function View ( handle ) {
	var handle = ( handle instanceof HTMLElement ) ? handle : document.createElement( handle || 'div' );
	Object.defineProperty( handle, '_view', { value: this } );
	handle.classList.add( 'View' );
	this._element = handle;
	this._layout = null;
	this._behaviors = null;
	this._events = {};
}

View.defineStatic( {
	Data: function ( databinding ) {
		var id = ++View.Data._lastId;
		View.Data._bindings[ id ] = databinding;
		return id;
	}
} );

View.Data.defineStatic( {
	_lastId: 0,
	_bindings: {},

	release: function ( id ) {
		delete View.Data._bindings[ id ];
	}
} );

/**
Retrieves the View associated with the element.
@def View|undefined function HTMLElement ()
*/
Object.defineProperty( HTMLElement.prototype, 'getView', {
	value: function () {
		return this._view;
	},
	writable: true
} );

View.define( {

	/**
	 * Handle of the Layout associated with the View.
	 * @def protected var View._layout
	 * @var Layout|null
	 */

	/**
	 * Handle of the Behavior(s) associated with the View.
	 * @def protected var View._behaviors
	 * @var Behavior[]|null
	 */

	/**
	 * Handle of the underlying DOM element.
	 * @def protected var View._element
	 * @var HTMLElement
	 */

	/**
	 * Data bound to the view.
	 * @def protected var View._data
	 * @var mixed
	 */

	/**
	 * @def private var View._events:object
	 */

	/**
	@unstable
	*/
	setData: function ( bindingid ) {
		this._dataId = bindingid;
		this._data = View.Data._bindings[ bindingid ];
		return this;
	},

	/**
	@unstable
	*/
	getData: function () {
		return this._data;
	},

	/**
	 * @unstable
	 */
	setLayout: function ( layout ) {
		if ( layout === null ) {
			if ( this._layout ) {
				this._layout.detach();
			}
		}
		else {
			if ( !(layout instanceof Layout) ) {
				layout = Layout.findByName( layout );
				if ( layout === null ) {
					return this.setLayout( layout );
				}
				else {
					layout = new layout( this );
				}
			}
		}
		this._layout = layout;
		return this;
	},

	/**
	 * @unstable
	 */
	addBehavior: function ( behavior ) {
		if ( String.isString( behavior ) ) {
			if ( behavior.indexOf( ' ' ) > 0 ) {
				behavior = behavior.split( ' ' );
			}
			else {
				behavior = [ behavior ];
			}
			for ( var i = 0, iend = behavior.length; i < iend; ++i ) {
				var b = Behavior.findByName( behavior[i] );
				if ( b === null ) {
					throw new Error( 'Unknown behavior ' + behavior[i] );
				}
				this.addBehavior( new b( this ) );
			}
			return this;
		}
		//if ( behavior instanceof Behavior ) {
			( this._behaviors || ( this._behaviors = [] ) ).push( behavior );
			return this;
		//}
		//throw new Error( 'Invalid behavior' );
	},

	/**
	 * @unstable
	 */
	getBehaviors: function () {
		return this._behaviors;
	},

	/**
	 * Retrieves the underlaying DOM element of the view.
	 * @def function View.getElement ()
	 * @return HTMLElement
	 */
	getElement: function () {
		return this._element;
	},

	/**
	 * @unstable
	 */
	findView: function ( selector ) {
		var el = this._element.querySelector( selector )
		return el ? el._view : null;
	},

	/**
	 * @unstable
	 */
	findParentView: function ( selector ) {
		var el = this._element;
		while ( el = el.parentNode ) {
			if ( el._view && el.matches( selector ) ) {
				return el._view;
			}
		}
		return null;
	},

	/**
	 * Adds a child view to this one.
	 * @def function View.addView ( view, order )
	 * @param View|View[]
	 * @param string|undefined Optional positioning of the view. Possible values are 'first'|'last'.
	 * @return bool
	 */
	addView: function ( view, order ) {
		var element = this._element;
		
		if ( view instanceof Array ) {
			if ( order == 'first' && element.firstChild ) {
				for ( var i = view.length - 1; i >= 0; --i ) {
					element.insertBefore( view[i]._element, element.firstChild );
				}
				return true;
			}
		
			for ( var i = 0, iend = view.length; i < iend; ++i ) {
				element.appendChild( view[i]._element );
			}
			return true;
		}

		if ( order == 'first' && element.firstChild ) {
			element.insertBefore( view._element, element.firstChild );
			return true;
		}

		element.appendChild( view._element );
		
		return true;
	},

	/**
	 * Moves a child view to new position.
	 * The view to be moved must already be a child added as a child.
	 * @def function View.moveView ( view, order )
	 * @param View View to be moved.
	 * @param string Positioning of the view. Possible values are 'first'|'last'.
	 * @return bool
	 */
	moveView: function ( view, order ) {
		var element = this._element;
		var velement = view._element;
		if ( order == 'first' ) {
			if ( element.firstChild !== velement ) {
				element.insertBefore( velement, element.firstChild );
				return true;
			}
			return false;
		}
		else if ( order == 'last' ) {
			if ( element.lastChild !== velement ) {
				element.insertBefore( velement, null );
				return true;
			}
			return false;
		}
		return false;
	},

	/**
	 * Removes a child view from this one.
	 * @def function View.removeView ( view )
	 * @param View
	 * @return bool
	 */
	removeView: function ( view ) {
		this._element.removeChild( view._element );
		return true;
	},

	/**
	 * @unstable
	 */
	addEventListener: function ( event, callback, capture ) {
		
		// overriding the callback so it receives the view as this, not the dom element
		var that = this;
		var overridecb = function () {
			return callback.apply( that, arguments );
		};

		var events;
		if ( ( events = this._events[event] ) === undefined ) {
			events = [];
			this._events[event] = events;
		}
		events.push( [ overridecb, callback, capture ] );

		return this._element.addEventListener( event, overridecb, capture );
	},

	/**
	 * @unstable
	 */
	removeEventListener: function ( event, callback, capture ) {
		var events = this._events[event];
		if ( events instanceof Array ) {
			for ( var i = 0, iend = events.length; i < iend; ++i ) {
				var item = events[i];
				if ( item !== null && item[1] === callback && item[2] === capture ) {
					events[i] = null;
					return this._element.removeEventListener( event, item[0], capture );
				}
			}
		}
	},

	/**
	 * @unstable
	 */
	dispatchEvent: function ( event ) {
		return this._element.dispatchEvent( event );
	},

	/**
	 * Sets the text content of the view's element.
	 * @def function View.setText ( id )
	 * @param string|null
	 * @return this
	 */
	setText: function ( text ) {
		this._element.textContent = text;
		return this;
	},

	/**
	Retrieves the text content of the view.
	@def function View.getText ()
	@return string|null
	*/
	getText: function () {
		return this._element.textContent;
	},

	/**
	 * Sets the "id" attribute of the underlaying DOM element.
	 * @def function View.setId ( id )
	 * @param string|null
	 * @return this
	 */
	setId: function ( id ) {
		this._element.id = id;
		return this;
	},

	/**
	 * Adds one or more CSS classes to the view's element.
	 * @def function View.setClass ( class )
	 * @param string Space separated list of class names.
	 * @return this
	 * @unstable
	 */
	setClass: function ( klass ) {
		var classList = this._element.classList;
		if ( klass.indexOf( ' ' ) > 0 ) {
			klass = klass.split( ' ' );
			for ( var i = klass.length - 1; i >= 0; --i ) {
				classList.add( klass[i] );
			}
		}
		else {
			classList.add( klass );
		}
		return this;
	},

	/**
	 * @unstable
	 */
	setBehavior: function ( behavior ) {
		return this.addBehavior( behavior );
	},


	/**
	 * @unstable
	 */
	hasState: function ( state ) {
		return this._element.classList.contains( state );
	},

	/**
	 * @unstable
	 */
	setState: function ( state, set ) {
		set = set === false ? 'remove' : 'add';
		var classList = this._element.classList;
		if ( state.indexOf( ' ' ) > 0 ) {
			state = state.split( ' ' );
			for ( var i = state.length - 1; i >= 0; --i ) {
				classList[set]( state[i] );
			}
		}
		else {
			classList[set]( state );
		}
		return this;
	}
} ).mixin( TEventDispatcher2 );

/*@UNITESTS*/
Unitest( 'View()', function () {

	var v = new View();
	test( v.getElement() instanceof HTMLDivElement );
	test( v.getElement()._view === v );

	v = new View( 'a' );
	test( v.getElement() instanceof HTMLAnchorElement );

	var br = document.createElement( 'br' );
	v = new View( br );
	test( v.getElement() instanceof HTMLBRElement );
});

Unitest( 'View.addView()/View.removeView()', function () {

	var v = new View();
	var a = new View( 'a' );
	var a2 = new View( 'a' );
	v.addView( a );
	test( v.getElement().firstChild === a.getElement() );
	
	v.addView( a2, 'first' );
	test( v.getElement().firstChild === a2.getElement() );

	v.removeView( a2 );
	test( v.getElement().firstChild === a.getElement() );

	v.addView( a2, 'last' );
	test( v.getElement().lastChild === a2.getElement() );
	test( v.getElement().firstChild === a.getElement() );

	v.removeView( a2 );
	v.addView( a2 );
	test( v.getElement().lastChild === a2.getElement() );
	
	v.removeView( a );
	v.removeView( a2 );
	test( v.getElement().firstChild === null );

} );

Unitest( 'View.moveView()', function () {

	var v = new View();
	var a = new View( 'a' );
	var a2 = new View( 'a' );
	v.addView( a );
	v.addView( a2 );
	test( v.getElement().firstChild === a.getElement() );
	test( v.getElement().lastChild === a2.getElement() );
	
	test( v.moveView( a, 'first' ) === false );
	test( v.getElement().firstChild === a.getElement() );

	test( v.moveView( a2, 'last' ) === false );
	test( v.getElement().lastChild === a2.getElement() );

	test( v.moveView( a2, 'first' ) === true );
	test( v.getElement().firstChild === a2.getElement() );
	test( v.getElement().lastChild === a.getElement() );

	test( v.moveView( a2, 'last' ) === true );
	test( v.getElement().firstChild === a.getElement() );
	test( v.getElement().lastChild === a2.getElement() );

} );

Unitest( 'View.setId()', function () {

	var v = new View();
	v.setId( 'test' );
	test( v.getElement().id == 'test' );

} );


Unitest( 'View.setClass()', function () {

	var v = new View();
	v.setClass( 'cls1 cls2' );
	test( v.getElement().classList.contains( 'cls1' ) );
	test( v.getElement().classList.contains( 'cls2' ) );

} );


/*Unitest( 'View.disable()/View.enable()', function () {

	var clicks = 0;
	var clicks2 = 0;
	var v = new View();
	var v1 = new View();
	v.addView( v1 );
	var h = new EventListener( 'click', function ( e ) {
		++clicks;
		e.stopPropagation();
	}, false ).add( v );
	var h2 = new EventListener( 'click', function ( e ) {
		++clicks2;
		e.stopPropagation();
	}, true ).add( v1 );
	document.body.appendChild( v.getElement() );

	v1.getElement().click();
	test( clicks2 == 1 );
	test( clicks == 0 );
	
	v1.disable();
	v1.getElement().click();
	test( clicks2 == 1 );
	test( clicks == 0 );

	v1.enable();
	v1.getElement().click();
	test( clicks2 == 2 );
	test( clicks == 0 );

	v.disable();
	v1.getElement().click();
	v.getElement().click();
	test( clicks2 == 2 );
	test( clicks == 0 );
	v.enable();
	v1.getElement().click();
	v.getElement().click();
	test( clicks2 == 3 );
	test( clicks == 1 );

	document.body.removeChild( v.getElement() );

} );*/
/*UNITESTS@*/