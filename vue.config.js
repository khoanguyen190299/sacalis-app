const { defineConfig } = require('@vue/cli-service')
const sass = require('sass')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/sacalis-app/'
  //   : '/'
})
