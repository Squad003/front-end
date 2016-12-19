'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./page-api');
const ui = require('./page-ui');

const onNewPage = function (event) {
  event.preventDefault();
  let data = getFormFields(this);

  // FRONT END VALIDATION DOENT WORK CUZ SUJA
  // if (!data.title) {
  //   return;
  // }
  console.log('data is ', data);
  api.newPage(data)
    .then(ui.success)
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
    .then(ui.editPageSuccess)
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

const addHandlers = () => {
  $('.new-page-form').on('submit', onNewPage);
  $('.show-pages').on('click', '.edit-page-button', showUpdate);
  $('.show-pages').on('submit', '.edit-page-form', onEditPage);
  $('.show-pages').on('click', '.delete-page-button', onDeletePage);
};

module.exports = {
  addHandlers,
};
