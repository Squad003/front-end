'use strict';

const showPages = require('../handlebars/show-pages.handlebars');
const showUsersPages = require('../handlebars/show-users-pages.handlebars');

const clearForms = () => {
  $('input').val('');
  $('textarea').val('');
};

const success = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
  $('#new-page-form').modal('hide');
  $('.new-form-fail').hide();
  clearForms();
};

const indexMyPagesSuccess = (data) => {
  console.log('data is ', data);
  $('.show-pages').html(showPages(data));
  $('.show-pages').show();
};

const showOthersPageSuccess = (data) => {
  console.log('data is ', data);
  $('.user-pages').html(showUsersPages(data));
  $('.show-page-content').hide();
};

const editPageSuccess = (data) => {
  console.log('some dicks? ', data);
  $('.edit-page-modal').modal('hide');
  $('.modal-backdrop').remove();
};

const deletePageSuccess = (data) => {
  console.log('idk');
};

const failure = (error) => {
  console.log('failure is', error);
  $('.new-form-fail').html('Please enter title and content!');
};

module.exports = {
  success,
  indexMyPagesSuccess,
  showOthersPageSuccess,
  editPageSuccess,
  deletePageSuccess,
  failure,
};
