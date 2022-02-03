import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchBlogItem,
  fetchBlogPost,
  fetchBlogComments,
} from '../api/index'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        fetchAskList()
          .then(({ data }) => {
            commit('SET_ASK', data);
          })
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_BLOG({ commit }) {
    fetchBlogItem()
      .then(({ data }) => {
        commit('SET_BLOG', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_POST({ commit }, id) {
    fetchBlogPost(id)
      .then(({ data }) => {
        commit('SET_POST', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_COMMENT({ commit }) {
    fetchBlogComments()
      .then(({ data }) => {
        commit('SET_COMMENT', data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}