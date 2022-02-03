<template>
  <div>
    <h2>Blog Post 😀</h2>
    <div class="user-description">
      <!-- <i class="fas fa-user"></i> -->
      <small class="blogTitle">{{ postInfo.title }}</small>
      <small class="blogName">UserName : {{ postInfo.id }}</small>
      <p class="blogBody">{{ postInfo.body }}</p>
    </div>
    <h1>comment 🙃</h1>
    <div v-for="comment in fetchedComment" class="comments">
      <p class="commentCo">{{ comment.body }}</p>
      <div class="gub2">
        <small class="commentEmail">{{ comment.email }}</small>
        <span v-on:click="updateData" class="btn1">수정</span>
        <span v-on:click="deleteData" class="btn2">삭제</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    postInfo() {
      return this.$store.state.post;
    },
    ...mapGetters({
      fetchedComment: 'fetchedComment'
    }),
  },
  created() {
    const postName = this.$route.params.id;
    this.$store.dispatch('FETCH_POST', postName);

    this.$store.dispatch('FETCH_COMMENT');
  },
  methods: {
    deleteData(comment, index) {
      this.$store.commit('removeComment', {comment, index});
    },
    updateData(comment, body) {
      this.$store.commit('modifyComment', {comment, body});
    },
  },
}
</script>

<style scoped>
h1 {
  margin-left: 30px;  
  padding-top: 50px;
}
h2 {
  margin-left: 30px;  
  padding-top: 10px;
  font-size: 30px;
}
.comments p {
  font-size: 19px;
  font-weight: 600;
  padding: 24px;
}
.btn1 {
  background-color: #42b883;
  color: #d7fff1;
  padding: 4px 9px;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
}
.btn2 {
  background-color: #fa5041;
  color: #fff0e4;
  padding: 4px 9px;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 15px;
  margin-left: 5px;
  margin-right: 40px;
}
.gub2 {
  float: right;
}
.commentEmail {
  font-size: 18px;
}
.blogName {
  float: right;
  margin-right: 40px;
  padding-top: 10px;
  font-size: 20px;
}
.blogBody {
  font-size: 28px;
}
.blogTitle {
  font-size: 30px;
  font-weight: 900;
}
.comments {
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-top: 30px;
  padding-left: 30px;
}
.time {
  font-size: 0.7rem;
}
</style>