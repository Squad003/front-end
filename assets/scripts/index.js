'use strict';
const authEvents = require('./auth/events.js');
const blogEvents = require('./blog/blog-events.js');
const pageEvents = require('./page/page-events.js');
// On document ready
$(() => {
  authEvents.addHandlers();
  blogEvents.addHandlers();
  pageEvents.addHandlers();
  $('#combo-form').modal('show');
  // $('#combo-form').modal({
  // backdrop: 'static',
  // keyboard: false
// });

});
