const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * @memberOf module:Parts
 * @return {Part}
 */
function getResolve() {
  return {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      components: path.resolve(__dirname, '../../src/components/components'),
      containers: path.resolve(__dirname, '../../src/components/containers'),
      pages: path.resolve(__dirname, '../../src/components/pages'),
      structures: path.resolve(__dirname, '../../src/components/pages/structures'),
      templates: path.resolve(__dirname, '../../src/components/templates'),
    },
  };
}

module.exports = getResolve;
