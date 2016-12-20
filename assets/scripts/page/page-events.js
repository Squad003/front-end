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

const showUpdate = (e) => {
  let className = '.page-edit-' + $(e.target).data('id');
  $(className).modal('show');
};

const onEditPage = function (event) {
  event.preventDefault();
  let id = $(event.target).data('id');
  let data = getFormFields(this);
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
  console.log('id is ', id);
  api.showPage(id)
    .then((data) => {
      console.log('data is ', data);
      $('.show-page-content').html(data.page.content);
    })
    .catch(ui.failure);

  // let content = data.page.content;
  // console.log('page data is ', data);

  // $('.content-' + id).removeClass('hidden');
  // $('.content-' + id).html(this.page.content);
};

const addHandlers = () => {
  $('.new-page-form').on('submit', onNewPage);
  $('.show-pages').on('click', '.edit-page-button', showUpdate);
  $('.show-pages').on('submit', '.edit-page-form', onEditPage);
  $('.show-pages').on('click', '.delete-page-button', onDeletePage);
  $('.user-list').on('click', '.go-to-user-button', onShowOtherUsersData);
  $('.user-pages').on('click', '.show-page-button', onPageClick);
};

module.exports = {
  addHandlers,
};
