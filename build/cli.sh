SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
	DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
	SOURCE="$(readlink "$SOURCE")"
	[[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

PREV_NODE_PATH=$NODE_PATH
if [[ -z $NODE_PATH ]]; then
	export NODE_PATH=$DIR/../deps/node/node_modules
else
	export NODE_PATH=$DIR/../deps/node/node_modules;$NODE_PATH
fi

$DIR/../deps/node/node-$(uname) $DIR/cli.js $@
export NODE_PATH=$PREV_NODE_PATH