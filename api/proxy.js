const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "修改为您需要镜像的网站，需加http";
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
    },
  })(req, res);
};
