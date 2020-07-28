const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  return {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, getCssLoader()],
  };
}

module.exports = getCssPreset;
