//APP entry point
require('babel-core/register');
require('babel-polyfill');
require('dotenv').config();

['.css', '.styl', '.ttf', '.woff', '.woff2','.ico'].forEach((ext) => require.extensions[ext] = () => {});

require("./src/server");
