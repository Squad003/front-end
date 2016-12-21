'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./blog-api');
const ui = require('./blog-ui');

const onNewPost = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.newPost(data)
      .then(() => {
      ui.success();
      return api.indexMyPosts();
    })
    .then(ui.indexMyPostsSuccess)
    .catch(ui.failure);
};

const onIndexPosts = function (event) {
  event.preventDefault();
  api.indexPosts()
    .then(ui.indexPostsSuccess)
    .catch(ui.failure);
};

const onIndexMyPosts = function (event) {
  event.preventDefault();
  api.indexMyPosts()
    .then(ui.indexMyPostsSuccess)
    .catch(ui.failure);
};

const onEditPost = function (event) {
  event.preventDefault();
  let id = $(event.target).data('id');
  let data = getFormFields(this);
  if(!data.blogpost.title || !data.blogpost.content) {
    $('.post-failure').html('Enter title and content please!');
    return;
  }
  api.editPost(id, data)
  .then(() => {
    ui.editPostSuccess();
    return api.indexMyPosts();
  })
  .then(ui.indexMyPostsSuccess)
  .catch(ui.failure);
};

const showUpdate = (e) => {
  let className = '.blog-edit-' + $(e.target).data('id');
  $(className).modal('show');
};

const onDeletePost = function (event) {
  event.preventDefault();
  let id = $(this).data('id');
  api.deletePost(id)
    .then(() => {
      ui.deletePostSuccess();
      return api.indexMyPosts();
    })
    .then(ui.indexMyPostsSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('.blog-submit').on('submit', onNewPost);
  $('.show-posts').on('click', onIndexPosts);
  $('.show-my-posts').on('click', onIndexMyPosts);
  $('.show-all-my-posts').on('click', '.delete-post-button', onDeletePost);
  $('.show-all-my-posts').on('click', '.edit-post-button', showUpdate);
  $('.show-all-my-posts').on('submit', '.blog-edit', onEditPost);
};

module.exports = {
  addHandlers,
};
