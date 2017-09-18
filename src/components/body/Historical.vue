<template>
  <div class="historical">
    <div id='chart'>
      <Row>
        <Col span='6' offset='2' >
          <Button type="primary" @click='plot'>Plot</Button>
          <Tree :data="treeData" show-checkbox></Tree>
        </Col>
        <Col span='14'>
          <my-chart :pvlist='pvlistChart' :from='selectFrom' :end='selectEnd'></my-chart>
        </Col>
      </Row>
    </div>
    <div id="datetime">
      <Row>
        <Col span='6' offset='6'>
          <h2>Start / End time:</h2>
        </Col>
        <Col span='6'>
          <DatePicker
          :value="value1"
          type="datetimerange"
          @on-ok="handleOk"
          @on-change="handleChange"
          style="width: 300px;"></DatePicker>
        </Col>
      </Row>
    </div>
    <br>
  </div>
</template>

<script>
import myChart from '@/components/visualization/Chart'

export default {
  name: 'historical',
  data: function () {
    var endDate = new Date()
    var startDate = new Date(new Date() - 2 * 60 * 60 * 1000)
    return {
      value1: [
        startDate,
        endDate
      ],
      pvlistChart: [
        'RNG:BEAM:CURR'
      ],
      selectFrom: startDate,
      selectEnd: endDate,
      dateRange: [],
      treeData: []
    }
  },
  components: {
    myChart
  },
  methods: {
    handleChange (date) {
      this.dateRange = date
    },
    handleOk (date) {
      this.selectFrom = new Date(this.dateRange[0])
      this.selectEnd = new Date(this.dateRange[1])
    },
    plot () {
      console.log('plot')
    }
  },
  created: function () {
    // var getAllPvURL = '/bpl/getAllPVs?limit=-1'
    var getAllPvURL = '/allpvs'
    var pvTree = []
    this.$http.get(getAllPvURL).then(
      response => {
        var allpvs = response.body
        console.log(allpvs)
        for (var pvIndex in allpvs) {
          var engName = allpvs[pvIndex].eng_name
          var pvName = allpvs[pvIndex].pv_name
          // var titleName = allpvs[pvIndex].title

          var systemName = engName.split('@')[0]
          var showName = engName.split('@')[1]
          var systemNameString = systemName.split('_')

          var current = pvTree
          for (var i in systemNameString) {
            var flag = false
            for (var j in current) {
              if (current[j]['title'] === systemNameString[i]) {
                current = current[j]['children']
                flag = true
                break
              }
            }
            if (flag === false) {
              var obj = {
                'title': systemNameString[i],
                'children': []
              }
              current.push(obj)
              current = current[current.length - 1]['children']
            }
          }
          var pvNode = {
            // text: showName + ' -- ' + pvName,
            pv: pvName,
            title: showName + ' -- ' + pvName
          }
          current.push(pvNode)
        }
        this.treeData = pvTree
      },
      response => {

      }
    )
  }
}
</script>

<style>
#datetime {
  margin:0 auto;
}
.ivu-tree {
  font-size: 4em;
}
</style>
