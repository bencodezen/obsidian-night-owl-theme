module.exports = {
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]'
      }
    }
  }
}
