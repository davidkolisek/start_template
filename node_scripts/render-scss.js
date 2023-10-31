'use strict';
const autoprefixer = require('autoprefixer')
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const postcss = require('postcss')
const sass = require('sass');
const sh = require('shelljs');
const cssminify = require('css-minify');

const stylesPath = '../src/scss/main.scss';
const destPath = upath.resolve(upath.dirname(__filename), '../dist/css/main.css');
const destPathMin = upath.resolve(upath.dirname(__filename), '../dist/css/main.min.css');

module.exports = function renderSCSS() {

    const results = sass.renderSync({
        data: entryPoint,
        includePaths: [
            upath.resolve(upath.dirname(__filename), '../node_modules')
        ],
    });
    const destPathDirname = upath.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    postcss([ autoprefixer ]).process(results.css, {from: 'main.css', to: 'main.css'}).then(result => {
        result.warnings().forEach(warn => {
            console.warn(warn.toString())
        })
        fs.writeFileSync(destPath, result.css.toString());
    })

    postcss([ autoprefixer, cssminify ]).process(results.css, {from: 'main.css', to: 'main.min.css', map: { inline: false }}).then(result => {
        result.warnings().forEach(warn => {
            console.warn(warn.toString())
        })
        fs.writeFileSync(destPathMin, result.css.toString());
        if (result.map) {
            fs.writeFileSync(destPathMin+".map", result.map.toString());
        }
    })


};

const entryPoint = `@import "${stylesPath}"`

