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

const failure = (error) => {
  $('.post-failure').html('Enter title and content');
  console.error("error is", error);
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
  $('.modal-backdrop').remove();
  // $('edit-post-modal').hide();
  console.log("data is", data);
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
