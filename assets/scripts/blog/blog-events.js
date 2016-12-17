'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./blog-api');
const ui = require('./blog-ui');



const onNewPost = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log("data is ", data);
  api.newPost(data)
    .then(ui.success)
    .catch(ui.failure);
  };


const onIndexPosts = function (event){
  event.preventDefault();
  api.indexPosts()
    .then(ui.onIndexPostsSuccess)
    .catch(ui.failure);
  };

const onIndexMyPosts = function (event) {
  event.preventDefault();
  api.indexMyPosts()
    .then(ui.onIndexMyPostsSuccess)
    .catch(ui.failure);
  };

const onDeletePost = function(event){
  event.preventDefault();
  let id = $(this).data('id');
  api.deletePost(id)
    .then(ui.onDeletePost)
    .catch(ui.failure);
};

const addHandlers = () => {
$('.blog-submit').on('submit', onNewPost);
$('.show-posts').on('click', onIndexPosts);
$('.show-my-posts').on('click', onIndexMyPosts);
$('.show-all-my-posts').on('click', '.delete-post-button', onDeletePost);


};

module.exports = {
  addHandlers,
};
