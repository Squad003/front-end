'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const papi = require('../page/page-api');
const pui = require('../page/page-ui');

const bapi = require('../blog/blog-api');
const bui = require('../blog/blog-ui');

const api = require('./api');
const ui = require('./ui');

// $('.container').hide();
$('.change-password-button').hide();
$('.log-out-button').hide();

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then((response) => {
      ui.signUpSuccess(response);
      return api.signIn(data);
    })
    .then((response) => {
      ui.signInSuccess(response);
      return papi.indexMyPages();
    })
    .then((response) => {
      pui.indexMyPagesSuccess(response);
      return bapi.indexMyPosts();
    })
    .then(bui.indexMyPostsSuccess)

    // .then((data) => {
    //   ui.signInSuccess(data);
    // })
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then((response) => {
      ui.signInSuccess(response);
      return papi.indexMyPages();
    })
    .then((response) => {
      pui.indexMyPagesSuccess(response);
      return bapi.indexMyPosts();
    })
    .then(bui.indexMyPostsSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.logOutSuccess)
    .catch(ui.failure);
};

const onShowUsers = function (event) {
  event.preventDefault();
  api.showUsers()
    .then(ui.showUsersSuccess)
    .catch(ui.error);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.log-out').on('submit', onSignOut);
  $('.show-users').on('click', onShowUsers);
};

module.exports = {
  addHandlers,
};
