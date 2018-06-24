<template>
  <div class="box">
    <co-head title="主页" icon="" user="" v-on:back="plus" v-on:info="than"> </co-head>

    <!-- <div class="box_list">
      <div v-on:click="dynmc(1)" class="cursor clickme red">
        点击我动态改变数据   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add= {{ add }} more= {{ more }} 
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>-->

    <div class="box_list" style="margin-top: 60px;padding-top:20px;">
      <div class="">
        <router-link :to="{path:'/head' }"> covu-Head 头部栏</router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/tabs' }"> covu-Tab 切换</router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/collapse' }"> covu-Collapse 手风琴</router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/button' }"> covu-Button 按钮</router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/dialog' }"> covu-Dialog 弹出框</router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/table' }"> covu-Table 表格</router-link>
      </div>
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
<style lang="less">
@red:#f22;
@gray: #efefef;
@percent: 100%;

.box{
  width: @percent;
  overflow: hidden;
  text-align: left;
  .box_list{
    padding: 2px 8px;
    margin: 0 10px 16px;
    border-bottom: 1px solid @gray;
    a{
      font-size: 16px;
    }
  }
  .red{
    color: @red
  }
  .cursor{
    cursor: pointer;
  }
}

</style>
