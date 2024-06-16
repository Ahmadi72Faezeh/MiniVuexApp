const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: '0.0.0.0',
        port: 8080, // You can change this port if needed
        allowedHosts: 'all', // Allow all hosts to access the dev server
    }
});