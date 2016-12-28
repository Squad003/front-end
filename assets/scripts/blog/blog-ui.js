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
  $('.post-failure').hide();
};

const failure = () => {
  $('.post-failure').html('Enter title and content');
};

const indexPostsSuccess = () => {


};

const indexMyPostsSuccess = (data) => {
  // console.log('posts are', data);
  $('.show-all-my-posts').html(showMyPosts(data));
};

const showOtherUsersPostsSuccess = (data) => {
  // console.log('posts are ', data);
  $('.user-pages').show();
  // $('.user-posts').show();
  $('.user-posts').html(showUserPosts(data));

};

const editPostSuccess = (data) => {
  // console.log('data is', data);
  $('.modal-backdrop').remove();
};

const deletePostSuccess = () => {

};

const searchPostSuccess = (data) => {
  $('.user-posts').html(showUserPosts(data));
  $('.user-posts').show();
  $('.user-data').hide();
  $('.other-user-data').show();
  $('.search-post-fail').hide();
  $('.search-user`-fail').hide();
};

module.exports = {
  failure,
  success,
  indexPostsSuccess,
  indexMyPostsSuccess,
  showOtherUsersPostsSuccess,
  deletePostSuccess,
  editPostSuccess,
  searchPostSuccess,
};
