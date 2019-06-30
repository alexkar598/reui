const path = require('path');

module.exports = {
	mode: "development",

	entry: {
		test: "./src/windows/test"
	},
	output: {
		filename: 'REUI_[name].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		"rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            }
        ]
	},
	devtool: "source-map",
	externals: ["react"]
};