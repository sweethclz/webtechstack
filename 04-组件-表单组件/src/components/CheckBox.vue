<template>
  <div id="box">
    <el-checkbox v-model="course" label="Java">Java技术</el-checkbox>
    <hr />
    <el-checkbox v-model="major" label="Java">Java技术</el-checkbox>
    <el-checkbox v-model="major" label="Php" disabled>Php技术</el-checkbox>
    <el-checkbox v-model="major" label="Python" border>Python技术</el-checkbox>
    <hr />
    <el-checkbox-group v-model="cities" size="medium" :min="1" :max="2">
      <el-checkbox label="重庆" border>重庆市</el-checkbox>
      <el-checkbox label="北京" border>北京市</el-checkbox>
      <el-checkbox label="上海" border></el-checkbox>
    </el-checkbox-group>
    <hr />
    <el-checkbox :indeterminate="!checkAll" v-model="checkAll" @change="switchCheckedAll">全选</el-checkbox>
    <el-checkbox-group v-model="names" @change="xzChange">
      <el-checkbox label="Tom">汤姆</el-checkbox>
      <el-checkbox label="Lucy">路西</el-checkbox>
      <el-checkbox label="Ani">安妮</el-checkbox>
    </el-checkbox-group>
    <hr />
    <el-checkbox-group v-model="names" size="mini" fill="green" text-color="yellow">
      <el-checkbox-button v-for="name in allNames" :label="name" :key="name">{{name}}</el-checkbox-button>
    </el-checkbox-group>
    <hr />
    <el-checkbox label="Hello" true-label="好" false-label="不好" :checked="true">你好</el-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      course: true,
      major: ['Java', 'Php'],
      cities: ['重庆', '上海'],
      allNames: ['Tom', 'Lucy', 'Ani'],
      names: ['Tom', 'Ani'],
      checkAll: false
    }
  },
  methods: {
    switchCheckedAll (v) {
      this.checkAll = v
      console.log(v)
      this.names = this.checkAll ? this.allNames : []
    },
    xzChange (v) {
      // 传递过来的v就是绑定的复选框数组当前选中的值
      // console.log(v.length, this.allNames.length)
      this.checkAll = (this.allNames.length === v.length)
    }
  }
}
</script>

<style>
</style>
