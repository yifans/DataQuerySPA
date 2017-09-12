<template>
  <div class="chart">
      <highcharts :options="myOptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
var dateNow = new Date()
var dateYesterday = new Date(new Date() - 24 * 60 * 60 * 1000)

export default {
  name: 'chart',
  data: function () {
    return {
      option: {
        chart: {
          zoomType: 'xy'
        },
        yAxis: [],
        title: {
          text: ''
        },
        series: [],
        credits: {
          // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
          text: 'NSRL@USTC',             // 显示的文字
          href: 'http://www.nsrl.ustc.edu.cn'
        },
        animation: false, // 关闭动画
        legend: {
          layout: 'vertical',
          align: 'right'
        }
      }
    }
  },
  props: {
    timeRange: {
      default: function () {
        return [dateYesterday, dateNow]
      }
    },
    pvlist: Array
  },
  computed: {
    myOptions: function () {
      // get URL
      var urlHead = '/retrieval/data/getData.qw?'
      for (var x in this.pvlist) {
        var urlTmp = urlHead + 'pv=' + this.pvlist[x] + '&'
        this.$http.get(urlTmp).then(
          response => {
            var body = response.body
            var pvName = body[0].meta.name
            var pvEGU = body[0].meta.EGU
            var pvValue = body[0].data.map(function (val, index, arr) {
              return [val['millis'], val['val']]
            })
            this.option.series.push({
              name: pvName,
              data: pvValue,
              yAxis: pvName,
              animation: false
              // pointInterval: pvValue.length / 5000
            })
            this.option.yAxis.push({
              title: {
                text: pvEGU
              },
              id: pvName
            })
            this.option.xAxis = {
              title: {
                text: 'Time'
              },
              type: 'datetime'
            }
          }, response => {
            // error callback
        })
      }
      return this.option
    }
  }
}
</script>

<style >

</style>
