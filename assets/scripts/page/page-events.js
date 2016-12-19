'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./page-api');
const ui = require('./page-ui');



const onNewPage = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log("data is ", data);
  if(!data.title) {
    return;
  }
  api.newPage(data)
    .then(ui.success)
    .catch(ui.failure);
  };




const addHandlers = () => {
$('.new-page-form').on('submit', onNewPage);
};



  module.exports = {
    addHandlers
};
