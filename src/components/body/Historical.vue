<template>
<div class="historical">
  <my-chart daterange=value1></my-chart>
  <div id="datetime">
    <Row>
      <Col span='6' offset='6'>
        <p>Start / End time:</p>
      </Col>
      <Col span='6'>
        <DatePicker :value="value1" type="datetimerange" style="width: 300px;"></DatePicker>
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
    var startDate = new Date()
    var endDate = new Date(new Date() - 24 * 60 * 60 * 1000)
    return {
      value1: [
        startDate,
        endDate
      ]
    }
  },
  components: {
    myChart
  }
}
</script>

<style>
#datetime {
  margin:0 auto;
}
</style>
