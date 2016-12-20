'use strict';

const config = require('../config.js');
const store = require('../store.js');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });

const signIn = (data) =>
  $.ajax({
    url: config.host + '/sign-in',
    method:'POST',
    data,
  });

const changePassword = (data) =>
    $.ajax({
      url: config.host + '/change-password/' + store.user._id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });

const signOut = () =>
  $.ajax({
    url: config.host + '/sign-out/' + store.user._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const showUsers = () =>
  $.ajax({
    url: config.host + '/users',
    method: 'GET',
  });

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  showUsers,
};
