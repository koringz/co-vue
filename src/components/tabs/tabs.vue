<template>
  <div class="covu-tabs" covu-tabs>
    <div class="covu-tabs-menu">
      <span
      class="covu-tab-submenu"
      v-for="(title, index) in tabTitles"
      :key="index"
      :class="{active: index + 1 == currentTabWindow}"
      v-on:click="viewTabWindows(index + 1)"
      >
      {{ title }}
      </span>
    </div>
    <div class="covu-tabs-content">
      <div
      class="covu-tab-page"
      ref="tab-page"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'coTabs',
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
  },
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
            self.removeClass(item,'covu-style-height-zone')
          }
          else {
            self.addClass(item,'covu-style-height-zone')
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
  },
}
</script>
<style lang="less">
  .covu-tabs{
    display: block;
    margin: 0 auto;
    padding: 10px;
    width: 380px;
    height: auto;
    overflow: hidden;
  }
  .covu-tabs-menu{
    display: table;
    width: 100%;
  }
  .covu-tab-submenu{
    display: table-cell;
    padding: 5px 15px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #D0CAEC;
    background-color: #E4DDFD;
    color: #111;
    cursor: pointer;
  }
  .covu-tab-submenu:last-child{
    border-right: none
  }
  .covu-tabs-content{
    padding: 10px;
    min-height: 300px;
    background-color: #f9f9f9;
    box-shadow: 0px 1px 3px #f4f4f4;
  }
  .covu-tab-page{
    font-size: 14px;
    color: #333;
  }
  .covu-tab-page > div{
    overflow: hidden;
  }
  .covu-style-height-zone{
    height: 0px;
  }
  .covu-tab-submenu.active{
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

