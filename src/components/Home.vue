<template>
  <div>
    <my-header></my-header>
    <my-nav></my-nav>
    <router-view></router-view>
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
</style>
