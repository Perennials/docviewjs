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
	if ( String.isString( behavior ) && behavior ) {
		//return Behavior[behavior] || null;
		var ret = window[behavior] || Behavior[behavior];
		if ( ret === undefined ) {
			if ( behavior.indexOf( '.' ) >= 0 ) {
				var nodes = behavior.split( '.' );
				ret = window[ nodes[0] ];
				for ( var i = 1, iend = nodes.length; i < iend && ret !== undefined; ++i ) {
					ret = ret[ nodes[i] ];
				}
			}
			//if ( ret === undefined ) {
			//	throw new Error( 'Undefined behavior "' + behavior + '"' );
			//}
		}
		return ret || null;
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