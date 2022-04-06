const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
        }
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {from: './src/assets/manifest.json'},
            ])
        ]
    },
}