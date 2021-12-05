module.exports = {
    entry: {
        index: path.join(__dirname, '/src/main.js')
    },
    output: {
        path: path.join(__dirname, '/dist'), // 打包后文件存放的地方
        filename: 'js/[name].[hash].js', // 每次保存hash都变化
    }
}