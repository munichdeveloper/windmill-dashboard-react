const {createProxyMiddleware, fixRequestBody} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/', // rewrite path
            },
            on: {
                proxyReq: fixRequestBody,
            },
        })
    );
};