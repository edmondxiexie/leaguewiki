const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',

    plugins: [
        new webpack.DefinePlugin({
            DEV: 'dev',
        }),
    ],
});
