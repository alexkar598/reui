const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',

	entry: {
		window_test: './src/windows/test.js',
		window_otherpage: './src/windows/otherpage.js',
		window_thirdpage: './src/windows/thirdpage.js'
	},

	output: {
		filename: 'reui_[name].js',
		path: path.resolve(__dirname, 'build')
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src/windows')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 0,
			minChunks: 1,
			name: "vendors",
			cacheGroups: {
			  vendors: {
				test: /[\\/]node_modules[\\/]/,
				priority: -10
			  },
			  default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true
			  }
			}
		}
	},

	devServer: {
		open: true
	}
};
