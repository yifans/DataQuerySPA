<template>
<div class="historical">
  <my-chart :pvlist='pvlistChart' :from='selectFrom' :end='selectEnd'></my-chart>
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
</div>
</template>

<script>
import myChart from '@/components/visualization/Chart'

export default {
  name: 'historical',
  data: function () {
    var endDate = new Date()
    var startDate = new Date(new Date() - 24 * 60 * 60 * 1000)
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
      dateRange: []
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
    }
  }
}
</script>

<style>
#datetime {
  margin:0 auto;
}
</style>
