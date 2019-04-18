const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',
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
};
