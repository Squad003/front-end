'use strict';


const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  $('#combo-form').modal('show');

});
