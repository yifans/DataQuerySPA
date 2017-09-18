<template>
  <div id="nav">
    <Menu mode="horizontal" theme="light">
      <div id="layout-nav">
          <MenuItem v-for="item in items" :name="item.router" :key="items.router">
            <router-link :to="item.router">{{item.name}}</router-link>
          </MenuItem>
      </div>
    </Menu>
    <br>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data: function () {
    return {
      items: [
        { name: 'Operation Status', router: '/status' },
        { name: 'Historical Data', router: '/historical' },
        { name: 'Data Analysis', router: '/analysis' },
        { name: 'Alarm', router: '/alarm' },
        { name: 'Help', router: '/help' }
      ]
    }
  }
}
</script>

<style>
#layout-nav {
  margin: 0 auto;
  width: 1000px;
}
</style>
