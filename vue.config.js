// // vue.config.js
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://contracta.frappe.cloud',  // السيرفر الخارجي
//         changeOrigin: true,
//         pathRewrite: { '^/api': '/api' },  // لا تحذف /api من المسار
//         secure: false,  // إذا كان الخادم يستخدم HTTPS غير موثوق (مثل شهادة ذاتية)
//       }
//     }
//   }
// }