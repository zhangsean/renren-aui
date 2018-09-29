require('colors')
var gulp = require('gulp')
var $    = require('gulp-load-plugins')()
var del  = require('del')
var fs   = require('fs')
var path = require('path')
var child_process = require('child_process')
const webpack = require('webpack-stream')

var baseDir = path.resolve(__dirname) // 当前目录
var destDir = `${baseDir}/dist`       // 构建的目标目录

var styleFileDir = `${baseDir}/src/assets/scss`
// 主题
var et            = require('element-theme')
var themeList     = require(`${baseDir}/theme.config.js`)
var themeOptions  = require(`${baseDir}/package.json`)['element-theme']
var themeFileDir  = themeOptions.config.replace(/(.*\/)[^\/]+/, '$1')
var themeFileName = themeOptions.config.replace(/.*\/(.+)\.scss/, '$1')
var themeTempfile = `${themeFileDir}${themeFileName}-temp.scss`
var theme = null

gulp.task('test', () => {
  gulp.src('src/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
})

/**
 * 主题处理
 */
gulp.task('themes', () => {
  child_process.spawn('cp', ['-r', styleFileDir, `${styleFileDir}-temp`])

  // fnCreate (themeList.filter(item => !item.hasBuild))

  // 递归生成主题, 保证同步进行
  function fnCreate (themeList) {
    if (themeList.length >= 1) {
      theme = themeList[0]

      console.log('\n')
      console.log('-------------------- 待生成, 主题 -------------------------'.green)
      console.log(themeList.map(item => item.name).join(', '))
      console.log('-------------------- 生成中, 主题 -------------------------'.green)
      console.log(theme.name)
      console.log('\n')

      // 修改scss主题变量, 生成临时scss文件
      var data = fs.readFileSync(`${themeFileDir}${themeFileName}.scss`, 'utf8')
      var result = data.replace(/\$--color-primary:(.*) !default;/, `$--color-primary:${theme.color} !default;`)
      fs.writeFileSync(path.resolve(themeTempfile), result)

      // 修改package.json中的配置信息, 生成主题
      themeOptions.config = themeTempfile
      themeOptions.out = themeOptions.out.replace(/(.*\/)[^\/]+/, `$1${theme.name}`)
      et.run(themeOptions, () => {
        themeList.splice(0, 1)
        gulp.start(['styles'], () => {
          console.log(123123)
        })
        // fnCreate (themeList)
      })
    } else {
      fs.unlink(themeTempfile, () => {
        console.log('\n')
        console.log('-------------------- 完成, 移除临时文件 -------------------------'.green)
        console.log(themeTempfile)
        console.log('\n')
      })
    }
  }
})

/**
 * 样式处理
 */
gulp.task('styles', () => {
  gulp.src([`${baseDir}/src/assets/scss/aui.scss`])
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
        'not ie <= 10'
      ],
      cascade: false
    }))
    // .pipe($.cleanCss({ includePaths: ['node_modules'] }))
    .pipe($.cleanCss({ inline: ['all'] }))
    .pipe($.concat('aui.min.css'))
    .pipe(gulp.dest(`${baseDir}/public/element-theme/${theme.name}`))
})

/**
 * 清除
 */
gulp.task('clean', () => {
  return del([destDir])
})

/**
 * 生产环境
 */
gulp.task('build', ['clean'], () => {
  isProduction = true
  gulp.start(['move', 'html', 'styles', 'images', 'scripts'])
})

/**
 * 开发环境
 */
gulp.task('default', () => {
  gulp.start(['styles'])
  gulp.watch([`${baseDir}/src/aui/scss/**/*.scss`], ['styles'])
})
