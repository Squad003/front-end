'use strict';

const success = (data) => {
  console.log("data is", data);
};



const failure = (error) => {
  console.log('fail');
};

module.exports = {
  failure,
  success,

};
