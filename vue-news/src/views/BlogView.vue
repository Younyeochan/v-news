<template>
  <div>
    <p v-for="blog in fetchedBlog">
      <router-link v-bind:to="`blog/${blog.id}`">
        {{ blog.title }}
      </router-link>
      <small> UserId: {{ blog.userId }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      blog: []
    }
  }, 
  computed: {
    ...mapGetters(['fetchedBlog']),
  },
  created() {
    this.$store.dispatch('FETCH_BLOG');
  }, 
}
</script>

<style>
  
</style>