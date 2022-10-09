#!/usr/bin/env bash NAME
# files path scss:css
scssPath1="scss/main.scss"
cssPath1="css/main.css"

scssPath2="scss/main2.scss"
cssPath2="css/main2.css"

scssFiles=($scssPath1 $scssPath2)
cssFiles=($cssPath1 $cssPath2)

echo "Watcher pre:
${myIndexedArray[*]}" 


sass --watch ${scssFiles[*]}:${cssFiles[*]}
