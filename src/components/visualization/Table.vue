<template>
  <div class="table">
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import bus from '../../assets/eventBus.js'
var columns1 = [
  {
    title: 'PV Name',
    key: 'pv'
  },
  {
    title: 'Value',
    key: 'value'
  }
]

export default {
  name: 'table',
  data: function () {
    return {
      columns1,
      data1: []
    }
  },
  props: [
    'pvlist'
  ],
  methods: {
    sendEvent: function () {
      bus.$emit('websocketEvent')
    }
  },
  mounted: function () {
    var vm = this
    var ws = new WebSocket('ws://localhost:7890/')
    ws.onopen = function () {
      ws.send(vm.pvlist)
    }
    ws.onmessage = function (event) {
      var rec = JSON.parse(event.data)
      console.log(rec)
      var data1Tmp = []
      for (var i in rec) {
        var item = {
          pv: rec[i].pvname,
          value: rec[i].value
        }
        data1Tmp.push(item)
      }
      vm.data1 = data1Tmp
      vm.sendEvent()
    }
  }
}
</script>

<style>

</style>
