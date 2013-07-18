"use strict";


/**
 * A panel view.
 * @def class View.Panel extends View
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
View.Panel = function () {
	View.call( this );
	this._element.classList.add( 'Panel' );
};

View.Panel.extend( View );

/**
 * A panel title view.
 * @def class View.Panel extends View
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
View.PanelTitle = function () {
	View.call( this );
	this._element.classList.add( 'PanelTitle' );
};

View.PanelTitle.extend( View );

/**
 * A panel footer view.
 * @def class View.PanelFooter extends View
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
View.PanelFooter = function () {
	View.call( this );
	this._element.classList.add( 'PanelFooter' );
};

View.PanelFooter.extend( View );

