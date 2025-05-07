<template>
  <div id="box">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="info">信息按钮</el-button>
    </el-row>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button plain type="primary">主要按钮</el-button>
      <el-button plain type="success">成功按钮</el-button>
      <el-button plain type="warning">警告按钮</el-button>
      <el-button plain type="danger">危险按钮</el-button>
      <el-button plain type="info">信息按钮</el-button>
    </el-row>
    <el-row>
      <el-button round plain>圆角按钮</el-button>
      <el-button round plain type="primary">主要按钮</el-button>
      <el-button round plain type="success">成功按钮</el-button>
      <el-button round plain type="warning">警告按钮</el-button>
      <el-button round plain type="danger">危险按钮</el-button>
      <el-button round plain type="info">信息按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle>图标按钮</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button disabled>禁用按钮1</el-button>
      </el-col>
      <el-col :span="24">
        <el-button :disabled="false" style="display:block;width:100%">禁用按钮2</el-button>
      </el-col>
      <el-col :span="24">
        <el-button :disabled="true" style="display:block;width:100%">禁用按钮3</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-button>非文字按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </el-row>
    <el-row>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">
        上传
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
      <el-button type="primary">
        <i class="el-icon-upload el-icon--right"></i>
        上传
      </el-button>
    </el-row>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">
          下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <el-button type="primary" loading>加载中1</el-button>
      <el-button type="primary" :loading="true">加载中2</el-button>
      <el-button type="primary" :loading="false">加载中3</el-button>
    </el-row>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>round按钮</el-button>
      <el-button circle>circle按钮</el-button>
      <el-button :autofocus="true">autofocus按钮</el-button>
      <el-button native-type="button">nativetype--button按钮</el-button>
      <el-button native-type="submit">nativetype--submit按钮</el-button>
      <el-button native-type="reset">nativetype--reset按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
