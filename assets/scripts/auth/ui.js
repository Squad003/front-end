'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');

const success = (data) => {
  successError.authSuccess();
  console.log("data is", data);
};



const failure = (error) => {
  successError.authFail();
  console.log('fail');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('.change-password-button').show();
  $('.log-out-button').show();
  $('#combo-form').modal('hide');
  $('.sign-in-button').hide();
  $('.sign-up-button').hide();
  console.log("nice job fuck boi");
};

const logOutSuccess = () => {
  // $('.container').hide();
  $('#log-out').modal('hide');
  // $('.change-password-button').hide();
  // $('.log-out-button').hide();
  console.log("peace");
};


module.exports = {
  failure,
  success,
  signInSuccess,
  logOutSuccess,
};