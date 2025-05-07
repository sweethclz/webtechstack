<template>
  <div id="box">
    <el-radio v-model="radio" label="1">男</el-radio>
    <el-radio v-model="radio" label="0">女</el-radio>
    <hr />
    <el-radio label="1">在职</el-radio>
    <el-radio label="2" :disabled="true">离职</el-radio>
    <el-radio label="3">找工作中</el-radio>
    <hr />
    <el-radio-group v-model="major" @change="gb" size="mini">
      <el-radio label="jsj" size="mini">计算机</el-radio>
      <el-radio label="ny" size="small">农业</el-radio>
      <el-radio size="medium">tk1</el-radio>
      <el-radio>tk2</el-radio>
    </el-radio-group>
    <hr />
    <el-radio-group v-model="city" size="small">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳">深圳市</el-radio-button>
    </el-radio-group>
    <hr />
    <el-radio-group v-model="city">
      <el-radio label="cq1">重庆市1</el-radio>
      <el-radio label="cq2">重庆市2</el-radio>
      <el-radio label="深圳" border>深圳市</el-radio>
      <el-radio-button label="cq3" border>重庆市3</el-radio-button>
    </el-radio-group>

    <hr />
    <el-radio-group v-model="city">
      <el-radio label="cq1" size="mini" :v-loading="true">重庆市1</el-radio>
      <el-radio label="cq2">重庆市2</el-radio>
      <el-radio label="深圳" border>深圳市</el-radio>
      <el-radio-button label="cq3" border>重庆市3</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      major: 'jsj',
      city: '深圳'
    }
  },
  methods: {
    gb (v) {
      console.log('单选按钮选中项目改变了....', this, v)
    }
  }
}
</script>

<style>
</style>
