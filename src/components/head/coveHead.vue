<template>
  <div class="co-header">
    <div class="default-top-header default-header-shadow">
      <div class="default-web-icon" v-on:click="$emit('back')">
        <span>{{ icon }}</span>
      </div>
      <div class="default-web-center">
        <span>
          {{ title }}
        </span>
      </div>
      <div class="default-web-information" v-on:click="$emit('info')">
        <span>{{ user }}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
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
  margin-top: -60px;
}
.default-top-header:before,
.default-top-header:after{
  content: "";
  display: table;
}
.default-top-header{
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  border: none;
  line-height: 1;
  text-align: left;
  background-color: #cfcfcf;
  color: #848484;
}
.default-web-icon,
.default-web-information{
  display: inline-block;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  color: #333;
}
.default-web-icon{
  cursor:pointer;
  padding-left: 10px;
}
.default-web-center{
  display: inline-flex;
  position: absolute;
  left: 0;
  right: 0;
}
.default-web-center span{
  margin: 0 auto;
}
.default-web-information{
  cursor:pointer;
  padding-right: 10px;
  float: right;
}
.default-header-shadow{
  box-shadow: 0px 1px 4px gray
}
.default-web-icon,
.default-web-information,
.default-web-center{
  padding: 10px;
}
.default-web-center{
  margin: 0 150px;
}
</style>
