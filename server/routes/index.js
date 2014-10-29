module.exports = function(appRouter) {
  require('./users')(appRouter);
  // Otherwise, go to the home page
  require('./main')(appRouter);
};
