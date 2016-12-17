'use strict';

const config = require('../config');
const store = require('../store');


const newPost = (data) =>
  $.ajax({
    url: config.host + '/blogposts',
    method:'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const indexPosts = () =>
  $.ajax({
    url: config.host + '/blogposts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const indexMyPosts = () =>
  $.ajax({
    url: config.host + '/blogposts/' + store.user._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });


const editPost = (id, data) =>
  $.ajax({
    url: config.host + '/blogposts/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const deletePost = (id) =>
  $.ajax({
    url: config.host + '/blogposts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });





module.exports = {
  newPost,
  indexPosts,
  indexMyPosts,
  deletePost,
  editPost,


};
