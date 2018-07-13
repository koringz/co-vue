<template>
  <div class="co-select">
    <co-input
      type="text"
      :input-size="size"
      :max="max"
      :width="width"
      v-model="val"
      readonly
      placeholder="请搜索内容"
      :suffix-icon="active ? 'fas fa-arrow-up rotate' : 'fas fa-arrow-up'"
      @focus="handleFocus"
      @blur="handleBlur"
      >
      <slot name="icon"></slot>
    </co-input>
    <transition
      name="el-zoom-in-top"
      >
      <ul
        class="co-select-list fas fa-caret-up"
        :style="{width: width + '%'}"
        v-show="visible"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
import coOption from "./coOption"
import coInput from "./../input/coInput"

export default {
  name: 'coSelect',

  components: {
    coOption,
    coInput
  },

  provide() {
    return {
      coselect: this
    }
  },

  data () {
    return {
      val: this.value,
      active: false,
      visible: false
    }
  },

  props: {
    value: {
      type: [Number, String, Array],
      default: ''
    },

    disabled: {
      type: Boolean,
      default: true
    },

    width: Number,
    size: {
      type: Number,
      default: 10
    },
    max:  {
      type: Number,
      default: 10
    },

    created: {
      type: Boolean,
      default: false
    },
  },

  methods : {
    handleClick() {
    },

    handleFocus() {
      this.active = true
      this.visible = true
    },

    handleBlur(event) {
      this.active = false

      setTimeout(()=> {
        if (this.visible) {
          this.visible = false
        }
        else {
          this.$emit('blur', event)
        }
      },100)
    },

    change(value) {
      this.val = value
    }
  },

  computed: {
    showOption() {
      return this.created == true
    }
  }
}
</script>
<style lang="less">
.co-select-list{
  marigin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
}
.co-select-list:before{
  position: absolute;
  margin-left: 20px;
  margin-top: -14px;
  font-size: 20px;
  color: #ccc
}
.co-input-suffix .co-input-icon{
  transition: transform .3s;
  transform: rotate(180deg);
}
.co-input-suffix .co-input-icon.rotate{
  transform: rotate(0deg);
}
</style>
