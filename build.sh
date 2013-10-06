#!/bin/sh
#
# Builds the e-additivies.web project
##################################################

PWD=$(pwd)
YUI=$(pwd)/yuicompressor-2.4.8.jar
BUILD=$(pwd)/build
BUILDNUM_FILE=`readlink -f build.number`

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
	else
		echo "Invalid cmd line parameter."
		exit
	fi
fi

echo "Cleaning ..."

### Cleanup old build files
find $BUILD -type f ! -name ".gitkeep" |xargs -i rm {}
find $BUILD -type d ! -name ".gitkeep" -and ! -name "build" |xargs -i rmdir {} -p --ignore-fail-on-non-empty

if [ ! -z $CLEANONLY ]; then 
	echo "Done."
	exit
fi

echo "Building ..."

### Copy required files
#find . -not -name "/.git*" -and ! -iname "build" -and ! -name "*.jar" -and ! -name "tests*" -and ! -name ".*" | xargs  -i  cp {} $BUILD/{} -R
#find . \( -name '.project*' -o -name '.git*' -o -name '*.sh' -o -name 'build*' -o -name '.settings*' -o -name 'tests.*' -o -name '*.jar'  \) \
#-prune -o -print | xargs echo {}# cp {} $BUILD/{} -R

cp css/ $BUILD -R
[ -e $BUILD/css/bootstrap-theme.css ] && rm $BUILD/css/bootstrap-theme.css
[ -e $BUILD/css/bootstrap.css ] && rm $BUILD/css/bootstrap.css
cp fonts/ $BUILD -R
cp img/ $BUILD -R
cp js/ $BUILD -R
[ -e $BUILD/js/config.js ] && rm $BUILD/js/config.js
cp partials/ $BUILD -R
cp .htaccess 404.html apple-touch-*.png favicon.ico index.html robots.txt $BUILD

### Obfuscate javascript
echo "Minifying ..."
cd $BUILD/css
java -jar $YUI -o 'main.css' main.css
# #rm style.css
cd $BUILD/js
find *.js -not -name "require.js" -not -name "config*.js" | xargs -i java -jar $YUI -o '.js$:.js' {}

### Production
cd $BUILD

# increment build number
echo "Setting build number ..."
if [ -f $BUILDNUM_FILE ]; then
    BUILDNUM=`cat $BUILDNUM_FILE`
else
    BUILDNUM=1
fi
BUILDNUM=$((BUILDNUM + 1))
echo $BUILDNUM > $BUILDNUM_FILE

# insert build no. into html
#sed -i 's/<\!\-\-build\-\->/Build: '$BUILDNUM'/g' index.html
sed -i 's/buildnumber:_timestamp/buildnumber:'$BUILDNUM'/g' index.html

if [ ! -z $NO_URCHIN ]; then 
	echo "Skipped: urchin <script>."
else
	# insert urchin into html
	sed -i '/<\!\-\-URCHIN\-\->/{
	    s/<\!\-\-URCHIN\-\->//g
	    r ../urchin
	}' index.html
fi

# insert uservoice feedback widget into html
sed -i '/<\!\-\-USERVOICE\-\->/{
    s/<\!\-\-USERVOICE\-\->//g
    r ../uservoice
}' index.html

echo "Build completed."
