<template>
  <div>
    <div class="user-description">
      <!-- <i class="fas fa-user"></i> -->
      <p class="blogName">이름: {{ postInfo.id }}</p>
      <p class="blogTitle">제목: {{ postInfo.title }}</p>
      <p class="blogBody">본문: <br> {{ postInfo.body }}</p>
    </div>
    <div class="comments">
      <p>이메일: {{ commentInfo.email }}</p>
      <p>댓글: {{ commentInfo.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postInfo() {
      return this.$store.state.post;
    },
    commentInfo() {
      return this.$store.state.comment;
    }
  },
  created() {
    const postName = this.$route.params.id;
    this.$store.dispatch('FETCH_POST', postName);

    this.$store.dispatch('FETCH_COMMENT');
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.blogName {
  font-size: 15px;
}
.blogBody {
  font-size: 25px;
}
.blogTitle {
  font-size: 20px;
}
.comments {
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>>

</style>