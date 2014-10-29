var ctrl = require('../main');
var pkgJson = require('../../package.json');
var appContext = pkgJson.config.appContext;

module.exports = function(appRouter) {
  appRouter.get('/', ctrl.index);
};