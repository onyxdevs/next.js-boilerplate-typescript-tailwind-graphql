/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const { aliases } = require('./package.json');

const pathSrc = path.resolve(__dirname, './src');

module.exports = {
    reactStrictMode: true,

    images: {
        domains: ['www.datocms-assets.com'],
    },

    /**
     * @param {Object} config
     * @param {Object} options
     * @returns {Object}
     */
    webpack: (config, { isServer }) => {
        // Create aliases dynamically
        if (aliases) {
            aliases.forEach((alias) => {
                config.resolve.alias[`@${alias}`] = `${pathSrc}/${alias}`;
            });
        }

        config.plugins.push(new StylelintPlugin());

        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    },
};
