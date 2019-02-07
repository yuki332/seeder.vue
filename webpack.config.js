const path = require('path');
const webpack = require('webpack');
const vuePluginLoader = require('vue-loader/lib/plugin');
const mode = "development";

module.exports = {
	// entry: ["./src/js/index.js", "./src/scss/index.scss"],
	entry: "./src/js/index.js",
	mode : mode,
	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node-modules/,
				loader: 'vue-loader'
			},
			{
				test: /\.js?$/,
				exclude: /node-modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [ 'vue-style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new vuePluginLoader()
	]
}
