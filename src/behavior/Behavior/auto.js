"use strict";

/**
 * This is proxy that will create the actual default behavior based on the type of the subject.
 * @def class Behavior.auto
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
Behavior.auto = function ( subject ) {
	if ( subject.AutoBehavior instanceof Function ) {
		return new subject.AutoBehavior( subject );
	}
	else {
		return null;
	}
};