<template>

  <div
      class="co-switch" 
      :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
      aria-checked="checked"
      role="switch"
      @click="switchValue"
  >
    <input 
      class="co-switch-input"
      :disabled="switchDisabled"
      @change="handleChange"
      type="checkbox"
      ref="input"
      name="name"
      id="id"
      @keyword:enter="switchValue"
    >

    <span :class="['co-switch-label', 'co-switch-label__left', !checked ? 'is-active' : '']">
      {{activeText}}
    </span> 
    <span
      class="co-switch-core"
      ref="core"
      :style="{ 'width': coreWidth + 'px' }"
    ></span> 
    <span :class="['co-switch-label', 'co-switch-label__right', checked ? 'is-active' : '']">
      {{addActiveText}}
    </span> 
  </div>


</template>
<script>

export default {
  
  name: 'coSwitch',

  data () {
    return {
      coreWidth: this.width
    }
  },

  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    activeText: {
      type: [String],
      default: ''
    },
    addActiveText: {
      type: [String],
      default: ''
    },
    name: String,
    id: String
  },

  computed: {
    checked() {
      return this.value === this.activeValue
    },
    switchDisabled() {
      return this.disabled || ({}).disabled
    }
  },

  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
    }
  },

  methods: {

    handleChange(event) {
      this.$emit('input', !this.checked ? this.activeValue : false);
      this.$emit('change', !this.checked ? this.activeValue : false)
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      })
    },

    switchValue() {
      /*debugger*/
      var d = !this.switchDisabled
      d && this.handleChange();
    }
  },

  mounted () {
    this.coreWidth = this.width || 40;
    this.$refs.input.checked = this.checked;
  }
}
</script>
<style lang="less" scoped>
.co-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
}
.co-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
.co-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
}
.co-switch-core:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
}
.co-switch.is-checked .co-switch-core {
    border-color: #409eff;
    background-color: #409eff;
}
.co-switch.is-checked .co-switch-core:after {
    left: 100%;
    margin-left: -17px;
}
.co-switch-label {
    transition: .2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
}
.co-switch-label__left{
  margin-right: 10px;
}
.co-switch-label__right{
  margin-left: 10px;
}
.co-switch-label.is-active{
  color: #409eff
}
</style>
