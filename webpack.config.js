const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './client/index.js',
   output: {
      path: path.join(__dirname, 'client'),
      filename: 'bundle.js',
      publicPath: "/"
   },
   devServer: {
      // inline: true,
      port: 8000,
      historyApiFallback: true,
      inline: true,
		  hot: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/env", "@babel/react"]
            }
         },{
 			      test: /\.css$/,
 			      loader: ['style-loader', 'css-loader']
 		    },{
 		      test: /\.scss$/,
 		      loaders: ['style', 'css', 'postcss', 'sass']
 		    },{
 		      test: /\.less$/,
 		      loaders: ['style', 'css', 'less']
 		    }, {
		      test: /\.woff$/,
		      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
		    }, {
		      test: /\.woff2$/,
		      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
		    }, {
		      test: /\.(eot|ttf|svg|gif|png)$/,
		      loader: "file-loader"
		    }
      ]
   },
   plugins:[
      // new HtmlWebpackPlugin({
      //    template: './index.html'
      // })
   ]
}
