const path = require('path');
const webpack = require('webpack')
const config = require('./config')
const mode = config.get('mode');


module.exports = {
    entry: [
        'babel-polyfill',
        './src/server.js'
    ],
    output: {
        path: `${__dirname}/build`,
        filename: './app.js',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/]},
            {test: /\.css$/, loader: 'ignore-loader'},
            {test: /\.styl$/, loader: 'ignore-loader'},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(mode)
            }
        }),
    ],
    target: 'node',
    externals: [/node_modules/]
};
