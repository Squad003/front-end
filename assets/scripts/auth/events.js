'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');


// $('.container').hide();
$('.change-password-button').hide();
$('.log-out-button').hide();



// const onSignUp = function (event) {
//   event.preventDefault();
//   let data = getFormFields(this);
//   api.signUp(data)
//     .then((response)=> {
//       ui.success(response);
//       return api.signIn(data);
//     })
//     .then((response) => {
//       ui.signInSuccess(response);
//       return capi.showChores();
//     })
//     .then(cui.showSuccess)
//     .catch(ui.failure);
// };

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event){
    event.preventDefault();
    api.signOut()
      .then(ui.logOutSuccess)
      .catch(ui.failure);
};


const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.log-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
