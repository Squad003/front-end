'use strict';

let authSuccess = function(){
  $('#sign-in-form').modal('hide');
  $('#sign-up-form').modal('hide');
  $('#change-password-form').modal('hide');
  $('#log-out').modal('hide');
  $('#combo-form').modal('show');
  $('.sign-up-fail').hide();
  $('.sign-in-fail').hide();
  $('.change-pw-fail').hide();
};


let authFail = function(){
  $('.sign-up-fail').show();
  $('.sign-in-fail').show();
  $('.change-pw-fail').show();
  $('.sign-up-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.sign-in-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.change-pw-fail').html('Oops, something went wrong, make sure all of your info is correct.');
}
module.exports = {
  authSuccess,
  authFail,
};
