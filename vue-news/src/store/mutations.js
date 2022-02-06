import { fetchBlogComments } from "../api";

export default {
  SET_NEWS(state, news) {
  state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_USER(state, user) {
    state.user = user;
  }, 
  SET_ITEM(state, item) {
    state.item = item;
  }, 
  SET_BLOG(state, blog) {
    state.blog = blog;
  },
  SET_POST(state, post) {
    state.post = post;
  },
  SET_COMMENT(state, comment) {
    state.comment = comment;
  },
  removeComment(state, payload) {
    state.comment.splice(payload.index, 1);
  },
  editComment() {
    console.log('dwdwdw')
   
  }
}