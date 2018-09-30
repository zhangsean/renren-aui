var gulp   = require('gulp')
var $      = require('gulp-load-plugins')()
var fs     = require('fs')
var path   = require('path')
var del    = require('del')
var colors = require('colors')
var child_process = require('child_process')

var baseDir = path.resolve(__dirname)

var theme            = {}
var styleFileDir     = `${baseDir}/src/assets/scss`
var styleFileDirTemp = `${styleFileDir}-temp`
var themeFileDir     = `${baseDir}/public/element-theme`
var et               = require('element-theme')
var etOptions        = {
  config: `${styleFileDirTemp}/_element-variables.scss`,
  out: `${themeFileDir}/default`,
  minimize: true,
  browsers: require(`${baseDir}/package.json`).browserslist
}

/**
 * 构建生成主题
 */
gulp.task('themes', () => {
  // 1. 拷贝一份scss样式文件，作为构建的临时文件
  child_process.spawnSync('cp', ['-r', styleFileDir, styleFileDirTemp])

  // 2. 先获取theme.config.js配置的主题列表，并通过hasBuild参数过滤掉不需要构建的主题
  fnCreate (require(`${baseDir}/src/theme.config.js`).list.filter(item => !item.hasBuild))

  // 3. 开始构建生成
  function fnCreate (themeList) {
    if (themeList.length >= 1) {
      // 4. 保存当前构建生成的主题对象
      theme = themeList[0]

      console.log('\n')
      console.log(colors.green('-------------------- 待构建，主题 -------------------------'))
      console.log(themeList)
      console.log('\n')
      console.log(colors.green('-------------------- 构建中，主题 -------------------------'))
      console.log(theme)
      console.log('\n')

      // 5. 修改.scss临时文件中的$--color-primary主题变量值
      var data = fs.readFileSync(etOptions.config, 'utf8')
      var result = data.replace(/\$--color-primary:(.*) !default;/, `$--color-primary:${theme.color} !default;`)
      fs.writeFileSync(path.resolve(etOptions.config), result)

      // 6. 移除.scss临时文件中的@import url(.*)引入的主题.css文件
      var data = fs.readFileSync(`${styleFileDirTemp}/aui.scss`, 'utf8')
      var result = data.replace(/@import url(.*);/, '')
      fs.writeFileSync(path.resolve(`${styleFileDirTemp}/aui.scss`), result)

      // 7. 调用element-theme插件，生成element组件主题
      etOptions.out = etOptions.out.replace(/(.*\/)[^\/]+/, `$1${theme.name}`)
      et.run(etOptions, () => {
        // 8. 生成后，构建同主题色aui.css项目主题
        gulp.start(['styles'], () => {
          // 9. 递归下一步
          themeList.splice(0, 1)
          fnCreate (themeList)
        })
      })
    } else {
      // 10. 删除临时文件
      child_process.execSync(`rm -rf ${styleFileDirTemp}`)
      console.log('\n')
      console.log(colors.green('-------------------- 构建完毕，删除临时文件 -------------------------'))
      console.log(styleFileDirTemp)
      console.log('\n')
      
      // 11. 删除主题不需要的文件
      var files = [
        `${themeFileDir}/**/*.css`,
        `!${themeFileDir}/**/index.css`,
        `!${themeFileDir}/**/aui.css`,
        `!${themeFileDir}/**/fonts`
      ]
      del(files)
      console.log(colors.green('-------------------- 构建完毕，删除主题不需要的文件 -------------------------'))
      console.log(files)
      console.log('\n')
    }
  }
})

gulp.task('styles', () => {
  return gulp.src([`${styleFileDirTemp}/aui.scss`])
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: etOptions.browsers,
      cascade: false
    }))
    .pipe($.cleanCss())
    .pipe($.concat('aui.css'))
    .pipe(gulp.dest(`${themeFileDir}/${theme.name}`))
})
