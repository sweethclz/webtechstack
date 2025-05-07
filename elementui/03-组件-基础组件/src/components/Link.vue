<template>
  <div id="box">
    <el-row>
      <div>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </div>
    </el-row>
    <el-row>
      <div>
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
      </div>
    </el-row>
    <el-row>
      <div>
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
      </div>
    </el-row>
    <el-row>
      <div>
        <el-link icon="el-icon-edit">编辑</el-link>
        <el-link>
          <i class="el-icon-view el-icon--left"></i>查看1
        </el-link>
        <el-link>
          查看2
          <i class="el-icon-view el-icon--right"></i>
        </el-link>
        <el-link :disabled="true">
          查看2
          <i class="el-icon-view el-icon--right"></i>
        </el-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
