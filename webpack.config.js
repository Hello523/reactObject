//webpack.config.js
const path = require('path');
var webpack = require('webpack');
//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
module.exports = {
    devtool: 'eval-source-map',
    //生成Source Maps,这里选择eval-source-map
    entry: ['webpack/hot/dev-server', __dirname + '/src/main.js'],//唯一入口文件,__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {//输出目录
        path: __dirname + '/build',
        //打包后的js文件存放的地方
        filename: 'bundle.js'
        //打包后输出的js的文件名
    },

    module: {
        //loaders加载器
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets : ['react' , 'es2015' , 'stage-0'],
                }
            },
            {test: /\.css$/,exclude: /node_modules/, loader: "style-loader!css-loader"},
             {test: /\.less$/,exclude: /node_modules/, loader: "style-loader!css-loader!less-loader"},
             {
                 test:/\.(png|jpg|gif|svg)$/i,
                 query: {
                    limit: 15000,
                    name: 'images/[name].[ext]?[hash:7]'
                },
                 loader: "file-loader"
             }
        ]
    },
    resolve: {
		extensions: ['', '.js', '.less', '.png', '.jpg', '.svg'],
		alias: {
			'kr-ui': path.join(process.cwd(), '/src/Components'),
		},
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
    ],

    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8082,//设置默认监听端口，如果省略，默认为"8080"
        process: true,//显示合并代码进度
    }
};
