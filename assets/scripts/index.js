'use strict';
const authEvents = require('./auth/events.js');
const blogEvents = require('./blog/blog-events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  blogEvents.addHandlers();
  // $('#combo-form').modal('show');

});
