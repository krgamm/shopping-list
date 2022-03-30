// Initialize modules
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const gulp = require("gulp");

function assetTask() {
  return src("app/assets/**/*.+(png|jpg|gif|svg)").pipe(
    gulp.dest("dist/images")
  );
}

function htmlTask() {
  return src("app/index.html", { sourcemaps: true }).pipe(
    dest("dist", { sourcemaps: "." })
  );
}

// Sass Task
function scssTask() {
  return src("app/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist/scss", { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("app/js/main.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./app",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("./app/*.html", browserSyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default Gulp Task
exports.default = series(
  assetTask,
  htmlTask,
  scssTask,
  jsTask,
  browserSyncServe,
  watchTask
);
