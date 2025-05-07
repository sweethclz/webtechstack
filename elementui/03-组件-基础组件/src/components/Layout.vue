<template>
  <div id="box">
    <el-row>
      <el-col :span="24"></el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <hr />
    <el-row :gutter="30">
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="24"></el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="8" :offset="2"></el-col>
      <el-col :span="6" :offset="4"></el-col>
    </el-row>
    <hr />
    <el-row type="flex">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <!-- start, center, end, space-between, space-around-->
    <el-row type="flex" justify="start">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-col :span="8">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :xs="12" :sm="8" :md="8" :lg="12" :xl="12">A</el-col>
      <el-col :xs="4" :sm="10" :md="8" :lg="0" :xl="12">B</el-col>
      <el-col :xs="8" :sm="6" :md="8" :lg="12" :xl="0">C</el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :xs="12" :sm="8" :md="8" :lg="12" :xl="12">A</el-col>
      <el-col :xs="4" :sm="10" :md="8" :lg="0" :xl="12">B</el-col>
      <el-col :xs="8" :sm="6" class="hidden-md-and-up">C</el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col :span="8" :push="3">A</el-col>
      <el-col :span="4">B</el-col>
      <el-col :span="4">C</el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
div {
  min-height: 40px;
  border: solid red 2px;
}
</style>
