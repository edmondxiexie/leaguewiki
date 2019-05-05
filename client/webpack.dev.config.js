const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
});
