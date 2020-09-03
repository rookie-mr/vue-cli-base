'use strict'
// import path from 'path'
const settings = require('./settings.js')  
module.exports = {
    configureWebpack: {
        name: settings.title
    }
}