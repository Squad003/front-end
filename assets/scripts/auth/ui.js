'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');
// const showPages = require('../handlebars/show-pages.handlebars');
const showUserList = require('../handlebars/show-users.handlebars');
// const api = require('./api');

const clearForms = () => {
  $('input').val('');
};

const signUpSuccess = () => {
  successError.authSuccess();
};

const failure = () => {
  successError.authFail();

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
  $('.add-new-page').show();
  $('.add-new-bp').show();
  $('.dashboard-title').show();
  $('.show-all-my-posts').show();
  $('.user-pages').hide();
  $('.user-posts').hide();
  $('.my-pages-header').show();
  $('.my-blogposts-header').show();
  $('.show-page-content').hide();
};

const logOutSuccess = () => {
  // $('.container').hide();
  $('#log-out').modal('hide');
  $('.sign-in-button').show();
  $('.sign-up-button').show();
  $('.show-pages').hide();
  $('.change-password-button').hide();
  $('.log-out-button').hide();
  $('.show-pages').hide();
  $('.dropdown-toggle').text('Sign Up/Sign In');
  $('.add-new-page').hide();
  $('.add-new-bp').hide();
  $('.dashboard-title').hide();
  $('.show-all-my-posts').hide();
  $('.my-pages-header').hide();
  $('.my-blogposts-header').hide();
  clearForms();
};

const showUsersSuccess = (data) => {
  $('.user-list').html(showUserList(data));
};

const changePasswordSuccess = () => {
  // console.log('hi');
};

const searchUsersSuccess = (data) => {
  $('.user-list').html(showUserList(data));
  $('.user-list').show();
  $('.user-data').hide();
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  logOutSuccess,
  showUsersSuccess,
  changePasswordSuccess,
  searchUsersSuccess,
};
