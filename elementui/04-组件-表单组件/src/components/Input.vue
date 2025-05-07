<template>
  <div id="box">
    <el-input v-model="name" placeholder="请输入用户名"></el-input>
    <el-input v-model="name" placeholder="请输入用户名" :disabled="true"></el-input>
    <el-input v-model="name" placeholder="请输入用户名" :clearable="true"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
    <hr/>
    <el-input v-model="birth" prefix-icon='el-icon-date' placeholder="生日"></el-input>
    <el-input v-model='birth' suffix-icon='el-icon-delete' placeholder="生日"></el-input>
    <hr/>
    <el-input v-model='birth' placeholder="生日">
      <i slot="prefix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <el-input v-model="birth" placeholder="生日">
      <i slot="suffix" class="el-input__icon el-icon-delete"></i>
    </el-input>
    <hr/>
    <el-input v-model="name" placeholder="输入名字" type="textarea" :rows="3" :cols="4"></el-input>
    <el-input v-model="name" placeholder="自动调整大小的多行文本框" type="textarea"
      :autosize="true"></el-input>
      <el-input v-model="name" placeholder="自动调整大小的多行文本框" type="textarea"
      :autosize="{minRows:3,maxRows:5}"></el-input>
    <hr/>
    <el-input v-model="name" placeholder="名字">
      <template slot="prepend">https://</template>
    </el-input>
    <el-input v-model="name" placeholder="名字">i
      <i slot="append">.com</i>
    </el-input>
    <hr/>
    <el-autocomplete v-model="address" placeholder="输入食品生成地址--获得焦点显示建议框"
      :fetch-suggestions="getSuggest"></el-autocomplete>
    <el-autocomplete v-model="address"
      placeholder="输入食品生成地址--获得焦点不显示建议框，输入匹配显示建议框"
      :fetch-suggestions="getSuggest" :trigger-on-focus="false"></el-autocomplete>
    <el-autocomplete v-model="name" placeholder="输入名字进行匹配"
      :fetch-suggestions="getNames">
      <template slot-scope="{item}">
        <h1>{{item.value}}</h1>
        <a href="https://www.baidu.com">{{item.age}}</a>
      </template>
    </el-autocomplete>
    <hr/>
    <el-input v-model="name" placeholder="名字"
      minlength="3" maxlength="8"></el-input>
    <el-input v-model="name" placeholder="名字"
      minlength="3" maxlength="8" :show-word-limit="true"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '张三',
      pwd: '0000',
      birth: '2012-12-12',
      cities: ['重庆', '上海', '北京', '天津'],
      city: '',
      address: ''
    }
  },
  methods: {
    getSuggest (inputContent, callBack) {
      console.log(inputContent, '------------', callBack)
      let numbers = [
        {value: 100},
        {value: 200},
        {value: 999}
      ]
      callBack(numbers.filter(function (obj, index, values) {
        console.log(obj, index, values)
        return inputContent > obj.value
      }))
    },
    getNames (name, callBack) {
      callBack([
        {
          value: '张三',
          age: 12
        },
        {
          value: '张三x',
          age: 99
        }
      ])
    }
  }
}
</script>

<style>
  div#box{
    width: 600px;
  }
</style>
