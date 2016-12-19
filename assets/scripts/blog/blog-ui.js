'use strict';

const showMyPosts = require('../handlebars/show-posts.handlebars');

const success = (data) => {
  console.log('data is', data);
};

const failure = (error) => {
  console.log('failure is', error);
};

const indexPostsSuccess = (data) => {
  console.log('data is', data);
};

const onIndexMyPostsSuccess = (data) => {
  console.log('data is', data);
  $('.show-all-my-posts').html(showMyPosts(data));

};

const onEditPostSuccess = (data) => {
  console.log('data is', data);
};

const onDeletePostSuccess = (data) => {
  console.log('data is', data);
};

module.exports = {
  failure,
  success,
  indexPostsSuccess,
  onIndexMyPostsSuccess,
  onDeletePostSuccess,
  onEditPostSuccess,

};
