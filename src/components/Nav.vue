<template>
  <div id="nav">
    <Menu mode="horizontal" theme="light">
      <div class="layout-nav">
          <MenuItem v-for="item in items" :name=item.router>
            <router-link :to=item.router>{{item.name}}</router-link>
          </MenuItem>
      </div>
    </Menu>
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
