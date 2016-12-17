'use strict';

const success = (data) => {
  console.log("data is", data);
};



const failure = (error) => {
  console.log('failure is', error);
};

const onIndexPostsSuccess = (data) => {
  console.log("data is", data);
};



module.exports = {
  failure,
  success,
  onIndexPostsSuccess,

};
