<template>
  <div id="box" style="width:600px">
      <el-select v-model="choose" placeholder="食品选择">
        <el-option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
        ></el-option>
      </el-select>
      <hr/>
      <el-select
        v-model="foods"
        multiple
        collapse-tags
        placeholder="选择多个食品">
        <el-option
        v-for="food in options"
        :key="food.value"
        :value="food.value"
        :label="food.label">{{food}}</el-option>
      </el-select>
      <hr/>
      <el-select v-model="city" placeholder="选择城市">
        <el-option
            v-for="item in cities"
            :key="item.value"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <hr/>
      <el-select v-model="groupCity" placeholder="城市分组展示">
          <el-option-group v-for="group in groupCities"
            :key="group.label" :label="group.label">
            <el-option
                v-for="cityItem in group.options"
                :key="cityItem.value"
                :value="cityItem.label"
                :label="cityItem.value"
                >{{cityItem.label}}</el-option>
          </el-option-group>
      </el-select>
      <hr/>
      <el-select v-model="choose" placeholder="食品选择"
        filterable :filter-method="glFood">
        <el-option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
        ></el-option>
      </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      choose: '',
      foods: [],
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      city: '',
      groupCities: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      groupCity: ''
    }
  },
  methods: {
    glFood (inputValue) {
      // 1、把输入的值赋给<el-select>通过v-model绑定的值
      this.choose = inputValue
      // 2、修改<el-option>中 for循环的变量的值（筛选得到的结果）
      this.options = [
        {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  }
}
</script>

<style>

</style>
