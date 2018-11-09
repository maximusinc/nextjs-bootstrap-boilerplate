// next.config.js
const withSass = require('@zeit/next-sass')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env


module.exports = withSass({
    webpack: function (config) {
        if (ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                analyzerPort: 8083,
                openAnalyzer: true
            }))
        }

        return config
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
        }
    }
})