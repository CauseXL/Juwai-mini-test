const path = require('path');

// TODO: static url when live "https://www.juwaistatic.com/landing-pages/lp/campaign/timeshare-survey/">
const livePath = 'http://staging1.juwaistatic.com/landing-pages/lp/campaign/timeshare-survey/';

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? livePath : './',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        open: true,
    },
    configureWebpack: (config) => {
        /* eslint-disable no-param-reassign */
        config.resolve.extensions = ['.js', '.vue', '.scss'];
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('config', resolve('src/config'));
    },
    css: {
        sourceMap: true,
    },
    pwa: {
        iconPaths: {
            favicon32: resolve('public/favicon.png'),
            favicon16: resolve('public/favicon.png'),
            appleTouchIcon: resolve('public/favicon.png'),
        },
    },
};
