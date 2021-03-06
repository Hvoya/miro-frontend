const path = require('path');

/**
 * @description Returns a config for development server
 * @memberOf module:Parts
 * @return {Part}
 */
function getDevServer() {
  return {
    contentBase: path.resolve(__dirname, '../../build'),
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  };
}

module.exports = getDevServer;
