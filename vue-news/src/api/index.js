import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  blogUrl: 'https://jsonplaceholder.typicode.com/'
}

function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem (id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

function fetchBlogItem () {
  return axios.get(`${config.blogUrl}posts`);
}

function fetchBlogPost (id) {
  return axios.get(`${config.blogUrl}posts/${id}`);
}

function fetchBlogComments () {
  return axios.get(`${config.blogUrl}comments`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchBlogItem,
  fetchBlogPost,
  fetchBlogComments,
}