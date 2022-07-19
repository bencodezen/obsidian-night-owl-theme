const fse = require('fs-extra')

fse
  .copy('./dist/obsidian.css', './obsidian.css')
  .then(() => console.log('🌳 CSS build file copied successfully to root!'))
  .catch(error => console.error(error))
