const path = require('path');

module.exports = {
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname, 'js'),
		filename: 'app.bundle.js'
	},
	mode: 'development',
	devServer: {
		contentBase: __dirname,
		inline: true,
		port: 4000
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}