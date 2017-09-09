<template>
  <div>
    <my-header></my-header>
    <my-nav></my-nav>
    <div id="layout-body">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/Header'
import myNav from '@/components/Nav'
import myFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    myHeader,
    myNav,
    myFooter
  }
}

</script>
</script>

<style >
#layout-body {
  height: 500px;
  color: red
}
</style>
