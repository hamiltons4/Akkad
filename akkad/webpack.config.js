var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/',
        library: "akkad",
        libraryTarget: "umd"

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        "babylonjs": "babylonjs",
        "react": "react",
        "react-dom": "react-dom",
        "immutable": "immutable",
        "react/lib/ReactMultiChild": "react/lib/ReactMultiChild",
        "react/lib/ReactUpdates": "react/lib/ReactUpdates"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            query: {
                optional: ["runtime"],
                stage: 0
            }
        }]
    }
}