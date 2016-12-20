'use strict';

const showPages = require('../handlebars/show-pages.handlebars');

const clearForms = () => {
  $('input').val('');
  $('textarea').val('');
};

const success = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
  $('#new-page-form').modal('hide');
  clearForms();
};

const indexMyPagesSuccess = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
  $('.show-pages').show();
};

const showOthersPageSuccess = (data) => {
  console.log('data is ', data);
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
  showOthersPageSuccess,
  editPageSuccess,
  deletePageSuccess,
  failure,
};
