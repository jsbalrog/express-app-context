var ctrl = require('../users');

module.exports = function(app) {
  app.use('/users', ctrl.index);
};