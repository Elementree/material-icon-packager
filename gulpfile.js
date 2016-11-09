var gulp = require('gulp');
var rename = require('gulp-rename');

var icons = [

    // action
    'account_box',
    'account_circle',
    'alarm',
    'announcement',
    'assessment',
    'assignment',
    'autorenew',
    'backup',
    'bug_report',
    'build',
    'check_circle',
    'code',
    'date_range',
    'delete',
    'delete_forever',
    'description',
    'done',
    'done_all',
    'event',
    'explore',
    'favorite',
    'favorite_border',
    'feedback',
    'get_app',
    'group_work',
    'help',
    'help_outline',
    'highlight_off',
    'history',
    'home',
    'info',
    'info_outline',
    'label',
    'label_outline',
    'list',
    'lock',
    'lock_open',
    'lock_outline',
    'note_add',
    'offline_pin',
    'perm_media',
    'report_problem',
    'room',
    'schedule',
    'search',
    'settings',
    'settings_ethernet',
    'speaker_notes',
    'star_rate',
    'stars',
    'timeline',
    'today',
    'verified_user',
    'visibility',

    // alert
    'error',
    'warning',

    // av
    'equalizer',

    // communication
    'chat',
    'location_on',
    'location_off',

    // content
    'add',
    'add_box',
    'add_circle',
    'add_circle_outline',
    'archive',
    'clear',
    'create',
    'drafts',
    'remove',
    'remove_circle',
    'remove_circle_outline',
    'report',
    'save',
    'send',
    'undo',

    // device
    'gps_fixed',
    'gps_not_fixed',
    'gps_off',

    // editor

    // file
    'cloud',
    'cloud_circle',
    'cloud_done',
    'cloud_download',
    'cloud_off',
    'cloud_queue',
    'cloud_upload',

    // hardware

    // image
    'camera',
    'camera_alt',

    // maps

    'add_location',
    'edit_location',
    'local_florist',
    'map',
    'navigation',
    'pin_drop',
    'place',

    // navigation
    'arrow_back',
    'arrow_downward',
    'arrow_drop_down',
    'arrow_drop_up',
    'arrow_forward',
    'arrow_upward',
    'cancel',
    'check',
    'chevron_left',
    'chevron_right',
    'close',
    'expand_less',
    'expand_more',
    'more_horix',
    'more_vert',
    'refresh',

];

var densities = [ 
    'drawable-mdpi',
    'drawable-hdpi',
    'drawable-xhdpi',
    'drawable-xxhdpi',
    //'drawable-xxxhdpi' 
];

var dps = [ /*'18dp',*/ '24dp', '36dp', '48dp' ];

var colors = [ 'white', 'black' ];

var ICON_PATH = './node_modules/material-design-icons';
var BUILD_PATH = './build/';

gulp.task('build', function(cb){

    var src = [];

    var colorSrc = '@(' + colors.join('|') + ')';
    var densitySrc = '@(' + densities.join('|') + ')';
    var dpSrc = '@(' + dps.join('|') + ')';

    icons.forEach(function(icon) {
        var iSource = ICON_PATH + '/*/' + densitySrc + '/ic_' + icon + '_' + colorSrc + '_' + dpSrc + '.png';  
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