var path = require("path");

module.exports = {
	entry: {
		"index": "./src/index.js"
	},
	output: {
		path: path.join(__dirname, "static/"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
			{ test: /\.js$/, exclude: /node_modules/, babelrc: false, loader: "babel-loader?presets[]=es2015" }
		]
	}
};