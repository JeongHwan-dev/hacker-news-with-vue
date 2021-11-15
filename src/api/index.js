import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/',
};

async function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}v0/${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserData(userId) {
  try {
    const response = await axios.get(`${config.baseUrl}v0/user/${userId}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchCommentItem(itemId) {
  try {
    const response = axios.get(`${config.baseUrl}v0/item/${itemId}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchList, fetchUserData, fetchCommentItem };
