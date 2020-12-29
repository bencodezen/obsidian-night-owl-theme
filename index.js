const fse = require('fs-extra')
const dotenv = require('dotenv')

// Load your local .env file into process.env
dotenv.config()

fse
  .copy('./obsidian-night-owl-theme.css', process.env.DESTINATION)
  .then(() => console.log('CSS file copied successfully!'))
  .catch(error => console.error(error))
