<template>
  <div>
    <p v-for="blog in fetchedBlog">
        {{ blog.title }}
    </p>
  </div>
</template>

<script>  
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