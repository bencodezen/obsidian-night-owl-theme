const fse = require('fs-extra')
const dotenv = require('dotenv')

// Load your local .env file into process.env
dotenv.config()

fse
  .copy('./obsidian-night-owl-theme.css', process.env.DESTINATION)
  .then(() => console.log('Destination #1: CSS file copied successfully!'))
  .catch(error => console.error(error))

fse
  .copy('./obsidian-night-owl-theme.css', process.env.DESTINATION_TWO)
  .then(() => console.log('Destination #2: CSS file copied successfully!'))
  .catch(error => console.error(error))
