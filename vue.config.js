module.exports = {
    // publicPath: '/',
    devServer: {
        host: '10.10.12.3', //ip地址
        port: 9001, //端口
        proxy: {
            '/apis': {
                // 测试环境
                target: 'https://aip.baidubce.com/',  // 接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/apis': ''   //需要rewrite重写的,
                }
            }
        }
    }
}
