<template>
<div>
  <!--按钮组件-->
  <el-button @click="showDialog">{{text}}</el-button>
  <!--对话框组件-->
  <el-dialog :visible.sync="dialogIsShow" :title="text">
    <p>我是对话框的内容</p>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'HelloElement',
  data () {
    return {
      text: '你好',
      dialogIsShow: false
    }
  },
  methods: {
    showDialog () {
      this.dialogIsShow = !this.dialogIsShow
      console.log('fg')
    }
  }
}
</script>

<style>

</style>
