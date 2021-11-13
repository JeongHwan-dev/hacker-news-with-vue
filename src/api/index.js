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

export { fetchNewsList, fetchAskList, fetchJobsList };
