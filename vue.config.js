module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://contracta.frappe.cloud',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  }