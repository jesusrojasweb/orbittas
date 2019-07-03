const gulp = require('gulp'),
  pug = require('gulp-pug'),
	postcss = require('gulp-postcss'),
	  cssnext = require('postcss-cssnext'),
	  atImport = require('postcss-import'),
	  cssnano = require('cssnano'),
	  mqpacker = require('css-mqpacker'),
    fontMagician = require('postcss-font-magician'),
	browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', () => {
	browserSync.init({
    server: './'
  });
 })
gulp.task('css', ()=>{

  const processor = [
    atImport(),//cssnested,
    cssnext({browsers: ['> 5%', 'ie 8']}),
    mqpacker()
  ]
  return gulp.src('./src/postcss/*.css')
    //.pipe(sourcemaps.init())
    .pipe(postcss(processor))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', ()=>{
	gulp.watch('./src/postcss/*.css', ['css'])
  gulp.watch('./*.html').on('change', browserSync.reload)
	gulp.watch('./js/*.js').on('change', browserSync.reload)
})
gulp.task('default',['watch','serve'])