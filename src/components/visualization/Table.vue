<template>
  <div class="table">
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
var columns1 = [
  {title: 'pv', key: 'pv'},
  {title: 'status', key: 'status', align: 'center'}
]

export default {
  name: 'table',
  data: function () {
    return {
      columns1
    }
  },
  props: [
    'pvlist'
  ],
  computed: {
    data1: function () {
      var tmp = [
        {pv: 'beam', status: 200},
        {pv: 'life', status: 50}
      ]
      console.log(this.pvlist)
      return tmp
    }
  }
}
</script>

<style>

</style>
