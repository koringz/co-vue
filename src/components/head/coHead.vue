<template>
  <div class="co-header">
    <div class="co-header-top co-header-shadow">
      <div class="co-header-icon" v-on:click="$router.go(-1)">
        <span><i :class="[ back ? 'fas fa-angle-left' : '']"></i>{{ icon }}</span>
      </div>
      <div class="co-header-center">
        <span>
          {{ title }}
        </span>
      </div>
      <div class="co-header-information" v-on:click="$emit('info')">
        <span>{{ user }}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'coHead',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    user: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  methods : {
  }
}
</script>
<style lang="less" scoped>
@red:#f22;
@gray: #aaa;
@percent: 100%;

.co-header{
  position: absolute;
  width: @percent;
  height: 60px;
  line-height: 60px;
}
.co-header-top:before,
.co-header-top:after{
  content: "";
  display: table;
}
.co-header-top{
  position: relative;
  width: 100%;
  height: inherit;
  margin: 0;
  border: none;
  line-height: inherit;
  text-align: left;
  background-color: #409eff;
  color: #FFF;
}
.co-header-icon,
.co-header-information{
  display: inline-block;
  padding: 0;
  font-weight: normal;
  color: #333;
}
.co-header-icon{
  cursor:pointer;
  padding-left: 10px;
}
.co-header-icon span{
  display: inline;
}
.co-header-icon span i{
  font-size: 20px;
}
.co-header-center{
  display: inline-flex;
  position: absolute;
  left: 0;
  right: 0;
}
.co-header-center span{
  margin: 0 auto;
}
.co-header-information{
  cursor:pointer;
  padding-right: 10px;
  float: right;
}
.co-header-shadow{
  box-shadow: 0px 1px 4px gray
}
.co-header-icon,
.co-header-information,
.co-header-center{
  line-height: 60px;
  color: #FFF;
  font-size: 18px;
}
.co-header-center{
  margin: 0 150px;
}
</style>
