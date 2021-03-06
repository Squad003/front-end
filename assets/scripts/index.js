'use strict';
const authEvents = require('./auth/events.js');
const blogEvents = require('./blog/blog-events.js');
const pageEvents = require('./page/page-events.js');
// On document ready
$(() => {
  authEvents.addHandlers();
  blogEvents.addHandlers();
  pageEvents.addHandlers();
  $('.add-new-page').hide();
  $('.add-new-bp').hide();
  $('.dashboard-title').hide();
  $('.my-pages-header').hide();
  $('.my-blogposts-header').hide();
  $('#combo-form').modal('show');

});
