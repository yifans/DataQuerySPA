<template>
  <div>
    <div v-for="item in items">
      <router-link :to="item.router">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data: function () {
    return {
      items: [
        { name: 'Status', router: '/status' },
        { name: 'Historical Data', router: '/historical' },
        { name: 'Data Analysis', router: '/analysis' },
        { name: 'Help', router: '/help' }
      ]
    }
  }
}
</script>

<style>
</style>
