'use strict';

const showPages = require('../handlebars/show-pages.handlebars');

const success = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
};

const indexMyPagesSuccess = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
};

const failure = (error) => {
  console.log('failure is', error);
};

module.exports = {
  success,
  indexMyPagesSuccess,
  failure,
};
