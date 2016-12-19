'use strict';

const config = require('../config');
const store = require('../store');


const newPage = (data) =>
  $.ajax({
    url: config.host + '/pages',
    method:'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });






  module.exports = {
    newPage,
};
