'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

module.exports = {
    devServer: {
        proxy: 'http://localhost:7001'
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
    }
};
