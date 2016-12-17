'use strict';

const showMyPosts = require('../handlebars/show-posts.handlebars');

const success = (data) => {
  console.log("data is", data);
};



const failure = (error) => {
  console.log('failure is', error);
};

const onIndexPostsSuccess = (data) => {
  console.log("data is", data);
};

const onIndexMyPostsSuccess = (data) => {
  console.log("data is", data);
  $('.show-all-my-posts').html(showMyPosts(data));
};

module.exports = {
  failure,
  success,
  onIndexPostsSuccess,
  onIndexMyPostsSuccess,


};
