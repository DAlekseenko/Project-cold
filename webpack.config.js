const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = require('./config')

const mode = config.get('mode');
const publicPath = config.get('publicPath');
const cssName = config.get('cssName');
const jsName = config.get('jsName');

const plugins = [
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(mode)
    }),
    new ExtractTextPlugin(cssName),
    new webpack.LoaderOptionsPlugin({
        debug: true
    }),
    new ManifestPlugin({
        fileName: 'manifest.json'
    })
];
if (mode === 'production') {
    plugins.push(
        new CleanWebpackPlugin(['public/assets/'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    );
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}


module.exports = {
    entry: ['babel-polyfill', './src/client.js'],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.json', '.js', '.jsx', '.styl']
    },
    output: {
        path: `${__dirname}/public/assets/`,
        filename: jsName,
        publicPath
    },

    devServer: {
        port: 3333,
        inline: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/"
                })
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2|jpe?g|png|gif|ico|svg+xml)$/i,
                loader: "file-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    plugins
};