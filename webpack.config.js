const path = require('path');
const webpack = require('webpack');
const argv = process.argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {

	return {
		name: 'client',
		mode: env === 'production' ? 'production' : 'development',
		entry: ['./dev/index'],
		output: {
			publicPath: '/dist',
			path: path.resolve(__dirname, 'dist'),
			pathinfo: false,
			filename: `tidy-carousel${env === 'production' ? '.min.js' : '.js'}`,
		  library: 'TidyCarousel',
		  libraryTarget: 'umd',
			libraryExport: 'default',
		  globalObject: "typeof self !== 'undefined' ? self : this"
		},
		performance: {
		 maxEntrypointSize: 512000,
		 maxAssetSize: 512000
	 },
		module: {
			rules: [
				{
	        test: /\.js$/,
	        include: path.resolve(__dirname, 'dev'),
	        loader: 'babel-loader',
	      },
				{
					test: /\.scss$/,
					use: [
						{loader: MiniCssExtractPlugin.loader},
						{loader: "css-loader"},
						{loader: "sass-loader", options: {includePaths: ["./dev/scss", './dev/sass']}},
					]
				},
				{
			        test: /\.(png|jpg|gif)$/i,
			        use: [
			          {
			            loader: 'url-loader',
			            options: {
			              fallback: 'responsive-loader',
			            },
			          },
			        ],
			    }
			]
		},

 	 	plugins: [
 	   // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
 		 new MiniCssExtractPlugin({
 			 filename: env === 'production' ? 'styles.min.css' : 'styles.css'
 		 })
 	 ],

		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			writeToDisk: true,
			port: 8080
		}
	};
};
