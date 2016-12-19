'use strict';

const showPages = require('../handlebars/show-pages.handlebars');

const success = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
  $('#new-page-form').modal('hide');
};

const indexMyPagesSuccess = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
};

const editPageSuccess = (data) => {
  console.log('some dicks? ', data);
  $('.edit-page-form').modal('hide');
};

const deletePageSuccess = (data) => {
  console.log('idk');

};

const failure = (error) => {
  console.log('failure is', error);
};

module.exports = {
  success,
  indexMyPagesSuccess,
  editPageSuccess,
  deletePageSuccess,
  failure,
};
