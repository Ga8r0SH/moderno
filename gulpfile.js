const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
}
function script(){
  return src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
}
function style(){
  return src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/magnific-popup/dist/magnific-popup.css'
  ])
  .pipe(concat('libs.min.css'))
  .pipe(cssmin())
  .pipe(dest('app/css'))
}
function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
			overrideBrowserslist:['last 8 version']
		}))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch('app/*.html').on('change', browserSync.reload);
}
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync; 
exports.default = parallel(browsersync, watching, script, style);