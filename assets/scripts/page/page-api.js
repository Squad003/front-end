'use strict';

const config = require('../config');
const store = require('../store');

const newPage = (data) =>
  $.ajax({
    url: config.host + '/pages',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const indexMyPages = () =>
  $.ajax({
    url: config.host + '/pages/me/' + store.user._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const showOtherUsersPages = (id) =>
$.ajax({
  url: config.host + '/pages/' + id,
  method: 'GET',
});

const editPage = (id, data) =>
  $.ajax({
    url: config.host + '/pages/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const deletePage = (id) =>
  $.ajax({
    url: config.host + '/pages/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

module.exports = {
  newPage,
  indexMyPages,
  deletePage,
  editPage,
  showOtherUsersPages,
};
