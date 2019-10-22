const path = require('path');
const webpack = require('webpack');
const argv = process.argv;
const idx_of_mode = argv.indexOf('--mode');

const config = {
	name: 'client',
	mode: process.env.NODE_ENV || 'development',
	entry: ['./dev/index'],
	output: {
		publicPath: './dist',
		path: path.resolve(__dirname, 'dist'),
		filename: `tidy-carousel${argv[idx_of_mode ? idx_of_mode + 1 : 0] === 'production' ? '.min.js' : '.js'}`,
	  library: 'TidyCarousel',
	  libraryTarget: 'umd',
		libraryExport: 'default',
	  globalObject: "typeof self !== 'undefined' ? self : this"
	},
	performance: {
	 maxEntrypointSize: 512000,
	 maxAssetSize: 512000
 },
 	plugins: [
   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
   new webpack.optimize.ModuleConcatenationPlugin(),
   new webpack.NoEmitOnErrorsPlugin()
 ],
	module: {
		rules: [
			{
				test: /\.scss/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader", options: {includePaths: ["./dev/scss", './dev/sass']}}
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

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		writeToDisk: true,
		port: 8080
	}
}

module.exports = config;
