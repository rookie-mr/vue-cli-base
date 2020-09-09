'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const settings = require('./settings.js')  
module.exports = {
    configureWebpack: {
        name: settings.title
    },
    chainWebpack: config => {
        config.module.rule('svg')
            .exclude.add(resolve('./src/icons'))
        
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('./src/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId: 'icon-[name]'})
    }
}