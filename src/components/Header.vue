<template>
  <div class="header">
    <Row>
      <Col span='2'offset='4'>
        <img src="../assets/nsrl_logo.jpg">
      </Col>
      <Col span='14'>
        <h1>HLS-II {{title}}</h1>
        <h5 id='nowTime'>{{nowTime}}</h5>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    var nowTime = new Date().toLocaleString()
    console.log(nowTime)
    return {
      nowTime
    }
  },
  computed: {
    title: function () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 2em;
  text-align: center;
  margin: 20px;
}
</style>
