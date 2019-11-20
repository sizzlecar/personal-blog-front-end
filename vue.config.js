'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {


    /**
     * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
     这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
     */
    publicPath: process.env.VUE_APP_BASE_URL,

    devServer: {
        proxy: process.env.VUE_APP_API_URL
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'layout-header-background': '#fff',
                    'layout-sider-background': '#fff',
                    'layout-trigger-background': '#fff',
                },
                javascriptEnabled: true
            }
        }
    },
    outputDir: process.env.VUE_APP_PACK_PATH
};
