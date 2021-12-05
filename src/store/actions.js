import { fetchList, fetchUserData, fetchCommentItem } from '../api/index.js';

export default {
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
  async FETCH_USER({ commit }, userId) {
    const response = await fetchUserData(userId);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchCommentItem(itemId);
    commit('SET_ITEM', response.data);
    return response;
  },
};
