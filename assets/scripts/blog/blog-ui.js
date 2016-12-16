'use strict';

const success = (data) => {
  console.log("data is", data);
};



const failure = (error) => {
  console.log('failure is', error);
};

module.exports = {
  failure,
  success,

};
