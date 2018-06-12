<template>
  <div class="box">
    <co-head title="主页" icon="返回" user="注册" v-on:back="plus" v-on:info="than"> </co-head>

    <div class="box_list">
      <div v-on:click="dynmc(1)" class="cursor clickme red">
        点击我动态改变数据   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add= {{ add }} more= {{ more }} 
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/test/id='+ 3 }"> test  </router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/head' }"> covu-head </router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/tabs' }"> covu-tab </router-link>
      </div>
    </div>

    <div class="box_list">
      <div class="">
        <router-link :to="{path:'/collapse' }"> covu-Collapse </router-link>
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
<style lang="less" scoped>
@red:#f22;
@gray: #efefef;
@percent: 100%;

.box{
  width: @percent;
  overflow: hidden;
  text-align: left;
  .box_list{
    padding: 2px 8px;
    margin: 16px 10px;
    border-bottom: 1px solid @gray;
    a{
      font-size: 14px;
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
