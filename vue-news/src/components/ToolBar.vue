<template>
  <div class="header">
    Youn yeochan  😀.🙃.😄 - 
    <router-link to="/blog">Blog</router-link> | 
    <router-link to="/photo">photo</router-link> | 
    <router-link to="/news">News</router-link> | 
    <router-link to="/ask">Ask</router-link> | 
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 15px;
  font-size: 20px;
}
.header .router-link-exact-active {
  font-weight: 900;
  color: greenyellow;
}
.header a {
  color: white;
  font-weight: 500;
}
</style>