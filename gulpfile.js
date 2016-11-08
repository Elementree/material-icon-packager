var gulp = require('gulp');
var rename = require('gulp-rename');

var icons = [
    'ic_3d_rotation'
];

var densities = [ 
    'drawable-mdpi',
    'drawable-hdpi',
    'drawable-xhdpi',
    'drawable-xxhdpi',
    'drawable-xxxhdpi' 
];

var dps = [ '18dp', '24dp', '36dp', '48dp' ];

var colors = [ 'white', 'black' ];

var ICON_PATH = './node_modules/material-design-icons';
var BUILD_PATH = './build/'

gulp.task('build', function(cb){

    var src = [];

    var colorSrc = '@(' + colors.join('|') + ')';
    var densitySrc = '@(' + densities.join('|') + ')';
    var dpSrc = '@(' + dps.join('|') + ')';

    icons.forEach(function(icon) {
        var iSource = ICON_PATH + '/*/' + densitySrc + '/' + icon + '_' + colorSrc + '_' + dpSrc + '.png';  
       src.push(iSource);
       console.log(iSource); 
    });

    gulp.src(src, {base: ICON_PATH})
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace(/^[a-z]+[\\\/]/, '');
            console.log(path.dirname, path.basename);
        }))
        .pipe(gulp.dest(BUILD_PATH));

    return cb;
});