'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');
const showPages = require('../handlebars/show-pages.handlebars');
const showUserList = require('../handlebars/show-users.handlebars');
const api = require('./api');

const clearForms = () => {
  $('input').val('');
};

const signUpSuccess = (data) => {
  successError.authSuccess();
  console.log('data is', data);
};

const failure = (error) => {
  successError.authFail();
  console.log('fail');
};

const signInSuccess = (data) => {
  store.user = data.user;
  signUpSuccess(data);
  $('.change-password-button').show();
  $('.log-out-button').show();
  $('#combo-form').modal('hide');
  $('.sign-in-button').hide();
  $('.sign-up-button').hide();
  $('.show-pages').show();
  $('.dropdown-toggle').text(data.user.email);
};

const logOutSuccess = () => {
  // $('.container').hide();
  $('#log-out').modal('hide');
  $('.sign-in-button').show();
  $('.sign-up-button').show();
  $('.show-pages').hide();
  $('.change-password-button').hide();
  $('.log-out-button').hide();
  clearForms();
};

const showUsersSuccess = (data) => {
  console.log('data is', data);
  $('.user-list').html(showUserList(data));
};

const changePasswordSuccess = (data) => {
  console.log('hi');
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  logOutSuccess,
  showUsersSuccess,
  changePasswordSuccess,
};
