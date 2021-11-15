import { fetchList, fetchUserData, fetchCommentItem } from '../api/index.js';

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, userId) {
    fetchUserData(userId)
      .then(({ data }) => commit('SET_USER', data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchCommentItem(itemId)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((error) => console.log(error));
  },
};
