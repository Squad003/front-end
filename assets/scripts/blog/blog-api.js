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
  })


module.exports = {
  newPost,
  indexPosts,


};
