# !/usr/bin/env bash

### sem vlozit cesty k scss:css suborom
watch="scss/main.scss:css/main.css scss/main2.scss:css/main2.css"
echo "Watcher pre:
$watch
" 
sass --watch $watch --style compressed
