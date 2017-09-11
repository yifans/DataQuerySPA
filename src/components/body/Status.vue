<template>
  <div id="status-page">
    <Row>
      <Col span="16" offset="2">
        <div id="status-chart">
          <my-chart></my-chart>
        </div>
      </Col>
      <Col span="4">
        <div id="status-table">
          <my-table :pvlist=pvlist></my-table>
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
      pvlist: 'beam'
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
