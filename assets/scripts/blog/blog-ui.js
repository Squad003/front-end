'use strict';

const showMyPosts = require('../handlebars/show-posts.handlebars');
const showUserPosts = require('../handlebars/show-users-posts.handlebars');

const clearForms = () => {
  $('input').val('');
  $('textarea').val('');
};

const success = () => {
  $('#new-post-form').modal('hide');
  clearForms();
};

const failure = (error) => {
  console.log('failure is', error);
  $('.post-failure').html('Enter title and content');
};

const indexPostsSuccess = (data) => {
  console.log('posts are', data);

};

const indexMyPostsSuccess = (data) => {
  console.log('posts are', data);
  $('.show-all-my-posts').html(showMyPosts(data));
};

const showOtherUsersPostsSuccess =(data) => {
  console.log('posts are ', data);
  $('.user-posts').html(showUserPosts(data));
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
  indexMyPostsSuccess,
  showOtherUsersPostsSuccess,
  onDeletePostSuccess,
  onEditPostSuccess,

};
