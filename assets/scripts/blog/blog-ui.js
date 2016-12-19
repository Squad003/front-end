'use strict';

const showMyPosts = require('../handlebars/show-posts.handlebars');

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
  $('.post-failure').html('Suja up.');
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
