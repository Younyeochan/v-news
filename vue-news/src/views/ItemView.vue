<template>
  <div>
    <p>name: {{ ItemInfo.id }}</p>
    <p>title: {{ ItemInfo.title }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    ItemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemName = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemName);
  }
}
</script>

<style>

</style>