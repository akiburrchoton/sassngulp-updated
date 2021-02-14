const {src , dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const origin = 'src';
const destination = 'build';



const sass = require('gulp-sass');

sass.compiler = require('node-sass');



function html(cb) {
    src(`${origin}/*.html`).pipe(dest(destination));
    cb();
}

function css(cb) {
  src(`${origin}/sass/*.scss`)
  .pipe(sass())
  .pipe(dest(`${destination}/css`));
  cb();
}

function js(cb) {
  src(`${origin}/js/*.js`).pipe(dest(`${destination}/js`));
  // src(`node_modules/simple-parallax-js`).pipe(dest(`${destination}/simple-parallax/js`));
  cb();
}


function watcher(cb){
  watch(`${origin}/*.html`).on('change', series(html, browserSync.reload))
  watch(`${origin}/sass/*.scss`).on('change', series(css, browserSync.reload))
  watch(`${origin}/js/*.js`).on('change', series(js, browserSync.reload))

  cb();
}
function server(cb){
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: destination
    }
  })
  cb();
}


exports.default = series(html, css, js, server, watcher)