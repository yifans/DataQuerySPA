<template>
  <div id="status-page">
    <Row>
      <Col span="16" offset="2">
        <div id="status-chart">
          <my-chart :pvlist='pvlistChart'></my-chart>
        </div>
      </Col>
      <Col span="4">
        <div id="status-table">
          <my-table :pvlist='pvlistTable'></my-table>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import myChart from '@/components/visualization/Chart'
import myTable from '@/components/visualization/Table'

export default {
  name: 'status',
  data: function () {
    return {
      pvlistTable: 'beam',
      pvlistChart: [
        'RNG:BEAM:CURR',
        'RNG:BEAM:LIFE'
      ]
    }
  },
  components: {
    myChart,
    myTable
  }
}
</script>

<style>

</style>
