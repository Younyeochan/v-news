import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: [],
    blog: [],
    post: [],
    comment: [],
    photo: [],
    items: false,
    newComment: '',
    isStatusOn: false,
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedBlog(state) {
      return state.blog;
    },
    fetchedPost(state) {
      return state.post;
    },
    fetchedComment(state) {
      return state.comment;
    },
    fetchedPhoto(state) {
      return state.photo;
    }
  },
  mutations,
  actions,
});