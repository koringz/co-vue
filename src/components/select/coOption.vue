<template>
 <li
  class="co-option-list-item"
  @click="handleValue"
 >
   <slot>
    <span>
     {{currentValue}}
    </span>
   </slot>
 </li>
</template>
<script>

export default {
  name: 'coOption',
  data () {
    return {
      currentValue: this.value
    }
  },

  inject: ['coselect'],

  props: {
    value: {
      required: true
    },

    label: {
      type: [String, Array],
      default: ''
    }
  },

  computed: {
    currentValue() {
      this.value || this.label || ''
    }
  },

  methods: {
    handleValue() {
      this.coselect.change(this.currentValue)
    }
  },
}
</script>
<style lang="less" scoped>
li{
  list-style: none;
}
.co-option-list-item{
  padding: 8px 20px;
  text-align: left;
  color: #888;
  font-size: 14px;
  cursor: pointer;
}
.co-option-list-item:hover{
  background-color: #f5f7fa
}
.co-option-list-item:first-child{
  margin-top: 5px
}
.co-option-list-item:last-child{
  margin-bottom: 5px
}
</style>
