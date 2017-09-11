<template>
  <div class="header">
    <h1>HLS-II {{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  computed: {
    title: function () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 2em;
  text-align: center;
  margin: 20px;
}
</style>
