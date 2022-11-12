#!/bin/sh
#
# Builds the e-additivies.web project
##################################################

PWD=$(pwd)
YUI=$(pwd)/yuicompressor-2.4.8.jar
BUILD=$(pwd)/build
BUILDNUM_FILE=`readlink -f build.number`
#BUILDNAME_FILE=`readlink -f build.name`
BUILD_NAME=

if [ ! -d $BUILD ]; then
	echo "Build folder($BUILD) does not exist!"
	exit
fi

if [ ! -e $YUI ]; then
	echo "YUI not found in $YUI!"
	exit
fi

# any cmd line params?
CMD="$1"
if [ ! -z $CMD ]; then
	if [ $CMD = "clean" ]; then
		CLEANONLY=1
	elif [ $CMD = "no-urchin" ]; then
		NO_URCHIN=1
	elif [ $CMD = "--version" ]; then
		if [ ! -z "$2" ]; then
			BUILD_NAME="$2"
		else 
			echo "Invalid build name!"
			exit
		fi
	else
		echo "Invalid cmd line parameter."
		echo
		echo "Usage: build.sh [clean] [no-urchin] [--version (text)]"
		echo
		exit
	fi
fi

echo "Cleaning ..."

### Cleanup old build files
find $BUILD -type f ! -name ".gitkeep" -and ! -name ".htaccess" |xargs -I{} rm -f {}
find $BUILD -type d ! -name ".gitkeep" -and ! -name "build" |xargs -I{} rmdir -p {}

if [ ! -z $CLEANONLY ]; then 
	echo "Done."
	exit
fi

echo "Building ..."

### Copy required files
#find . -not -name "/.git*" -and ! -iname "build" -and ! -name "*.jar" -and ! -name "tests*" -and ! -name ".*" | xargs  -i  cp -R {} $BUILD/{}
#find . \( -name '.project*' -o -name '.git*' -o -name '*.sh' -o -name 'build*' -o -name '.settings*' -o -name 'tests.*' -o -name '*.jar'  \) \
#-prune -o -print | xargs echo {}# cp -R {} $BUILD/{}

cp -R css $BUILD
[ -e $BUILD/css/bootstrap-theme.css ] && rm -f $BUILD/css/bootstrap-theme.css
[ -e $BUILD/css/bootstrap.css ] && rm -f $BUILD/css/bootstrap.css
cp -R fonts $BUILD
cp -R img $BUILD
cp -R js $BUILD
[ -e $BUILD/js/config.js ] && rm -f $BUILD/js/config.js
cp -R partials $BUILD
cp 404.html apple-touch-*.png favicon.ico index.html robots.txt $BUILD
cp .htaccess-template $BUILD

### Obfuscate javascript
echo "Minifying ..."
cd $BUILD/css
java -jar $YUI -o 'main.css' main.css
# #rm style.css
cd $BUILD/js
find *.js -not -name "require.js" -not -name "config*.js" | xargs -I{} java -jar $YUI -o '.js$:.js' {}

### Production
cd $BUILD

if [ -z "$BUILD_NAME" ]; then
	# increment build number
	echo "Setting build number ..."
	if [ -f $BUILDNUM_FILE ]; then
	    BUILDNUM=`cat $BUILDNUM_FILE`
	else
	    BUILDNUM=1
	fi
	BUILDNUM=$((BUILDNUM + 1))
	echo $BUILDNUM > $BUILDNUM_FILE

	# if [ -f $BUILDNAME_FILE ]; then
	# 	BUILDNAME=`cat $BUILDNAME_FILE`
	# 	BUILDNUM="$BUILDNAME-$BUILDNUM"
	# fi
else
	BUILDNUM=$BUILD_NAME
fi

# insert build no. into html
#sed -i 's/<\!\-\-build\-\->/Build: '$BUILDNUM'/g' index.html
sed -i .bak 's/buildnumber:_timestamp/buildnumber:"'"$BUILDNUM"'"/g' index.html

if [ ! -z $NO_URCHIN ]; then 
	echo "Skipped: urchin <script>."
else
	# insert urchin into html
	sed -i .bak '/<\!\-\-URCHIN\-\->/{
	    s/<\!\-\-URCHIN\-\->//g
	    r ../urchin
	}' index.html
fi

# insert uservoice feedback widget into html
# sed -i .bak '/<\!\-\-USERVOICE\-\->/{
#     s/<\!\-\-USERVOICE\-\->//g
#     r ../uservoice
# }' index.html

echo "Build completed."
