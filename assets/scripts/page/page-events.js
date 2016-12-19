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

const addHandlers = () => {
  $('.new-page-form').on('submit', onNewPage);
};

module.exports = {
  addHandlers,
};
