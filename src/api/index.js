import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/',
};

function fetchNewsList() {
  return axios.get(`${config.baseUrl}v0/news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}v0/ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}v0/jobs/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}v0/${pageName}/1.json`);
}

function fetchUserData(userId) {
  return axios.get(`${config.baseUrl}v0/user/${userId}.json`);
}

function fetchCommentItem(itemId) {
  return axios.get(`${config.baseUrl}v0/item/${itemId}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserData,
  fetchCommentItem,
};
