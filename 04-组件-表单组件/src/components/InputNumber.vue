<template>
  <div id="box" style="width:600px">
      <el-input-number
        v-model="count"
        placeholder="输入数量"
        :min="99" :max="105" label="商品数量"
        :step="0.56" step-strictly
        :precision="4"
        size="mini"
        controls-position="right"
        :controls="false"></el-input-number>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  }
}
</script>

<style>

</style>
