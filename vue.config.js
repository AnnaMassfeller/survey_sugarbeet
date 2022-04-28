module.exports = {
  publicPath: '/survey_sugarbeet/',
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  }
}