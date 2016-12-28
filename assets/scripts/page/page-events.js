'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./page-api');
const ui = require('./page-ui');
const bapi = require('../blog/blog-api');
const bui = require('../blog/blog-ui');

const onNewPage = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.newPage(data)
    .then(()=> {
      ui.success();
      return api.indexMyPages();
    })
    .then(ui.indexMyPagesSuccess)
    .catch(ui.failure);
};

const onIndexMyPages = function (event) {
  event.preventDefault();
  api.indexMyPages()
    .then(ui.indexMyPagesSuccess)
    .catch(ui.failure);
};

// const showUpdate = (e) => {
//   let className = '.page-edit-' + $(e.target).data('id');
//   $(className).removeClass('hidden');
// };

const showUpdate = (e) => {
  let className = '.page-edit-' + $(e.target).data('id');
  $(className).modal('show');
};

const onEditPage = function (event) {
  event.preventDefault();
  let id = $(event.target).data('id');
  let data = getFormFields(this);
  if (!data.page.title || !data.page.content) {
    $('.page-failure').html('Enter title and content please!');
    return;
  }

  api.editPage(id, data)
  .then((data) => {
    ui.editPageSuccess(data);
    return api.indexMyPages();
  })
  .then(ui.indexMyPagesSuccess)
  .catch(ui.failure);
};

const onDeletePage = function (event) {
  event.preventDefault();
  let id = $(this).data('id');
  api.deletePage(id)
    .then(() => {
      ui.deletePageSuccess();
      return api.indexMyPages();
    })
    .then(ui.indexMyPagesSuccess)
    .catch(ui.failure);
};

const onShowOtherUsersData = function (event) {
  event.preventDefault();
  let id = $(this).data('id');
  api.showOtherUsersPages(id)
    .then((data) => {
      ui.showOthersPageSuccess(data);
      return bapi.showOtherUsersPosts(id);
    })
    .then(bui.showOtherUsersPostsSuccess)
    .catch(ui.failure);
};

const onPageClick = function (event) {
  event.preventDefault();
  let id = $(event.target).data('id');
  // console.log('id is ', id);
  api.showPage(id)
    .then((data) => {
      // console.log('data is ', data);
      $('.show-page-content').html(data.page.content);
      $('.show-page-content').show();
      $('.user-posts').hide();

    })
    .catch(ui.failure);

  // let content = data.page.content;
  // console.log('page data is ', data);

  // $('.content-' + id).removeClass('hidden');
  // $('.content-' + id).html(this.page.content);
};

const showHide = () => {
  $('.user-data').show();
  $('.user-list').hide();
  $('.other-user-data').hide();
};

const showHideBlog = () => {
  $('.user-posts').show();
  $('.show-page-content').hide();
};


const addHandlers = () => {
  $('.new-page-form').on('submit', onNewPage);
  $('.show-pages').on('click', '.edit-page-button', showUpdate);
  $('.show-pages').on('submit', '.edit-page-form', onEditPage);
  $('.show-pages').on('click', '.delete-page-button', onDeletePage);
  $('.user-list').on('click', '.go-to-user-button', onShowOtherUsersData);
  $('.user-pages').on('click', '.show-page-button', onPageClick);
  $('.dashboard-title').on('click', showHide);
  $('.user-pages').on('click', '.show-other-blog-button', showHideBlog);
};

module.exports = {
  addHandlers,
};
