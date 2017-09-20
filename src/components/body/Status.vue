<template>
  <div id="status-page">
    <Row>
      <Col span="5" offset='1'>
        <div id="status-table">
          <my-table :pvlist='pvlistTable'></my-table>
        </div>
      </Col>
      <Col span="16">
        <div id="status-chart">
          <my-chart :pvlist='pvlistChart'></my-chart>
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
      pvlistTable: [
        'RNG:OPER:MODE',
        'RNG:OPER:STAT',
        'RNG:ENG',
        'RNG:BEAM:CURR',
        'RNG:BEAM:LIFE'
      ],
      pvlistChart: [
        'RNG:BEAM:CURR'
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
