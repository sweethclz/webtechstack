<template>
  <div id="box">
    <el-container>
      <el-header></el-header>
      <el-aside></el-aside>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
    <el-container>
      <el-aside></el-aside>
      <el-main></el-main>
      <div style="width:300px"></div>
    </el-container>
    <el-aside></el-aside>
    <el-main></el-main>
    <hr />
    <el-container direction="vertical">
      <el-aside></el-aside>
      <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  border: solid red 1px;
}
</style>
