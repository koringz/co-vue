<template>
  <div class="default-tabs" default-tabs>
    <div class="default-tabs-menu">
      <span
      class="default-tab-submenu"
      v-for="(title, index) in tabTitles"
      :key="index"
      :class="{active: index + 1 == currentTabWindow}"
      
      >
      {{ title }}
      </span>
    </div>
    <div class="default-tabs-content">
      <div
      class="default-tab-page"
      ref="tab-page"
      >
        <slot></slot>
      </div>
    </div>
  </div>
  <!-- v-on:click="viewTabWindows(index + 1)" -->
</template>
<script>

export default {
  props: {
    tabTitles: {
      type: Array,
      default: []
    },
    tabWindows: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currentTabWindow: this.tabWindows, // 目前切换的窗口
      invisible: true, // 可见
      viewSliderElements: [], // 显示的窗口组 滑块组
      previousWindows: 1, // 上一次的窗口
    }
  },/*
  watch: {
    currentTabWindow: function(val) { // currentTabWindow监听tab切换的窗口变化 立即执行函数viewTabWindows
      this.viewTabWindows(val);
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.invisible = false;
      this.viewSliderElements = this.$refs['tab-page'].children;

      this.viewTabWindows(this.currentTabWindow);
    })
  },
  methods: {
    viewTabWindows(wins) {
      this.previousWindows = this.currentTabWindow;
      this.currentTabWindow = wins;

      this.transitionStart();
    },
    transitionStart() {
      var self = this;
      if(this.isChangedWindows()) {
        [].forEach.call(this.viewSliderElements,(item,index)=> {

          if(index == self.currentTabWindow - 1){
            self.removeClass(item,'zone')
          }
          else {
            self.addClass(item,'zone')
          }

        })
      }
    },
    isChangedWindows() {
      return this.previousWindows == this.currentTabWindow;
    },
    replaceAll(str,target,replace) {
        var reg="/"+target+"/g";    //查找时忽略大小写
        reg = eval(reg);
        return str.replace(reg,replace)
    },
    addClass(el,className) {
        if (!className) return false;
        else if(el.className.indexOf(className) > -1) return false;
        else {
          className = className.trim('').replace(/\s+/, ' ').split(' ');
          el.className += ' ' + className.join(' ');
          return true;
        }
    },
    removeClass(el,className) {
      var self = this;
      if (!className) return false;
      className = className.trim('').replace(/\s+/, ' ').split(' ');
      var cls = ' ' + el.className + ' ';

      [].forEach.call(className,(item,index)=> {
          item = ' ' + item;
          cls = self.replaceAll(cls,item, ' ');
      });

      el.className = cls.trim();
      return true;
    }
  },*/
}
</script>
<style lang="less">
  .default-tabs{
    display: block;
    margin: 0 auto;
    padding: 10px;
    width: 380px;
    height: auto;
    overflow: hidden;
  }
  .default-tabs-menu{
    display: table;
    width: 100%;
  }
  .default-tab-submenu{
    display: table-cell;
    padding: 5px 15px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #D0CAEC;
    background-color: #E4DDFD;
    color: #111;
    cursor: pointer;
  }
  .default-tab-submenu:last-child{
    border-right: none
  }
  .default-tabs-content{
    padding: 10px;
    min-height: 300px;
    background-color: #f9f9f9;
    box-shadow: 0px 1px 3px #f4f4f4;
  }
  .default-tab-page{
    font-size: 14px;
    color: #333;
  }
  .default-tab-page > div{
    overflow: hidden;
  }
  .zone{
    height: 0px;
  }
  .default-tab-submenu.active{
    background-color: #BAF9C2;
    color: #505050;
    font-size: 13px;
  }
  .invisible{
    visibility: hidden
  }
  .hide-height{
    height:0
  }
</style>

