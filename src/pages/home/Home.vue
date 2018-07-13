<template>
  <div class="box">
    <co-head title="主页" icon="" user="" v-on:back="plus" v-on:info="than"> </co-head>
    <div class="box_list" style="margin-top: 60px;">
        <router-link :to="{path:'/head' }">  head 头部栏</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/tabs' }">  tab 切换</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/collapse' }">  collapse 手风琴</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/button' }">  button 按钮</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/dialog' }">  dialog 弹出框</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/switch' }">  switch 开关</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/input' }">  input 输入框</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/inputNumber' }">  inputNumber 计数器</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/table' }">  Table 表格</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/steps' }">  step 步骤条</router-link>
    </div>
    <div class="box_list">
        <router-link :to="{path:'/select' }">  select 下拉菜单</router-link>
    </div>
  </div>
</template>
<script>
import {coHead} from '../../components'

export default {
  data () {
    return {
      add: 1,
      more: 2
    }
  },
  watch: {
    add: function (x) {
      this.than(x)
    }
  },
  created() {
  },
  methods : {
    dynmc() {
      this.add += 1
    },
    plus() {
      this.more += 1;
    },
    than() {
      this.more *= 2;
    },
  },
  components : {
    coHead
  }
}
</script>
<style>
</style>
