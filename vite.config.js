import path from 'path'

module.exports = {
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name == 'style.css') {
            return 'obsidian.css'
          } else {
            return '[name].[ext]'
          }
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'scss/obsidian.scss'),
      filename: 'obsidian-night-owl',
      name: 'obsidian-night-owl'
    }
  }
}
