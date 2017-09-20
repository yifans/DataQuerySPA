<template>
  <div class="chart">
    <highcharts :options="myOptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import bus from '../../assets/eventBus.js'
var dateNow = new Date()
var dateHourAgo = new Date(new Date() - 60 * 60 * 1000)
// var dateYesterday = new Date(new Date() - 24 * 60 * 60 * 1000)
var initOption = {
  chart: {
    zoomType: 'xy'
  },
  credits: {
    // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
    text: 'NSRL@USTC',             // 显示的文字
    href: 'http://www.nsrl.ustc.edu.cn'
  },
  series: [],
  animation: false, // 关闭动画
  legend: {
    layout: 'vertical',
    align: 'right'
  },
  xAxis: {
    title: {
      text: 'Time'
    },
    type: 'datetime'
  }
}
export default {
  name: 'chart',
  data: function () {
    return {
      myOptions: {}
    }
  },
  props: {
    end: {
      type: Date,
      default: function () {
        return dateNow
      }
    },
    from: {
      type: Date,
      default: function () {
        return dateHourAgo
      }
    },
    pvlist: Array,
    autoRefresh: {
      default: false
    }
  },
  methods: {
    draw: function () {
      var chart = this.$refs.highcharts.chart
      chart.update(initOption)
      // remove old series
      for (var s in chart.series) {
        chart.series[s].remove()
      }
      for (var x in chart.yAxis) {
        chart.yAxis[x].remove()
      }
      // get URL
      var urlHead = '/retrieval/data/getData.qw?'
      var urlFrom = this.from.toISOString()
      var urlEnd = this.end.toISOString()
      // var seriesGet = []
      console.log(this.pvlist)
      for (var p in this.pvlist) {
        var urlTmp = urlHead + 'pv=' + this.pvlist[p] + '&' +
        'from=' + urlFrom + '&' +
        'end=' + urlEnd
        this.$http.get(urlTmp).then(
          function (response) {
            var body = response.body
            var pvName = body[0].meta.name
            var pvEGU = body[0].meta.EGU
            var pvValue = body[0].data.map(function (val, index, arr) {
              return [val['millis'], val['val']]
            })
            chart.addAxis({
              title: {
                text: pvEGU
              },
              id: pvName
            })
            chart.addSeries({
              name: pvName,
              data: pvValue,
              yAxis: pvName,
              animation: false
              // pointInterval: pvValue.length / 5000
            })
          }, function (response) {

        })
      }
    }
  },
  mounted: function () {
    var vm = this
    vm.draw()
    bus.$on('websocketEvent', function () {
      vm.draw()
    })
  }
}
</script>

<style >

</style>
