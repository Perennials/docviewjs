"use stict";

/**
 * The basis for behaviors.
 * Behaviors are chunk of logic that can be attached to other objects.
 * @def class Behavior
 * @author Borislav Peev <borislav.asdf@gmail.com>
 */
function Behavior () {
}

/**
 * Finds a behavior constructor from string representation.
 * @def static function Behavior.findByName ( behavior )
 * @param string
 * @return function|null
 */
Behavior.findByName = function ( behavior ) {
	if ( String.isString( behavior ) ) {
		return Behavior[behavior] || null;
	}
	return null;
};

Behavior.define( {

	/**
	 * Detaches the behavior from its subject.
	 * @def function Behavior.detach ()
	 */
	detach: function () {
	}
} );