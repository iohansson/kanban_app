const path = require('path'),
  merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
},
  TARGET = process.env.npm_lifecycle_event;

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}
if (TARGET === 'build') {
  module.exports = merge(common, {});
}
