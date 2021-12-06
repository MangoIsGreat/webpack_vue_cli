const { webpack } = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist', // 本地服务器所加载文件的目录
        port: '8899',
        inline: true, // 文件修改后实时刷新
        historyApiFallback: true, // 不跳转
        hot: true, // 热更新
    },
    mode: 'development'
})