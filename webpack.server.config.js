const webpack = require('webpack')
const config = require('./config')
const mode = config.get('mode');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: [
        'babel-polyfill',
        './src/server.js'
    ],
    output: {
        path: process.cwd(),
        filename: './app.js',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    node: {
        // // Need this when working with express, otherwise the build fails
         __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
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
                NODE_ENV: JSON.stringify(mode),
                SERV: JSON.stringify(true)
            }
        }),
    ],
    target: 'node',
    externals: [/node_modules/, nodeExternals()]
};
