const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use("/socket.io", createProxyMiddleware({
        target: "ws://localhost:9000",
        ws: true
    }))
};