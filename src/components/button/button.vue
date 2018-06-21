<template>
  <button 
  role="button" 
  class="co-button" 
  :class="[
    type ? 'co-button-' + type: ''
  ]"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'coButton',

    props: {
      type:{
        type: String,
        default() {
          return 'default'
        }
      },

    },

    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>
<style lang="less" scoped>
@green: #38A064;
@blur: #16AEEE;
@white: #FFF;
@gray: #5B7492;
@yellow: #E6A23C;
@red: #F58D6D;

.co-button{
  display: inline-block;
  float: none;
  margin: 0;
  padding: 12.26px 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  *border-radius:  6px !important;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  -ms-border-radius: 6px;
  border-radius: 6px;
  white-space: nowrap;
}
.co-button-default{
  color: #606266;
  background-color: @white;
}
.co-button-default:hover{
  color: @blur;
  background-color: rgba(22,174,238,.1)
}

.co-button-primary{
  color: @white;
  background-color: @blur;
  border-color: @blur;
}
.co-button-primary:hover{
  background-color: rgba(22,174,238,.9);
}


.co-button-success{
  color: @white;
  background-color: @green;
  border-color: @green;
}
.co-button-success:hover{
  background-color: rgba(56,160,100,.9);
}


.co-button-info{
  color: @white;
  background-color: @gray;
  border-color: @gray;
}
.co-button-info:hover{
  background-color: rgba(91,116,146,.9);
}

.co-button-warning{
  color: @white;
  background-color: @yellow;
  border-color: @yellow;
}
.co-button-warning:hover{
  background-color: rgba(230,162,60,.9);
}

.co-button-darger{
  color: @white;
  background-color: @red;
  border-color: @red;
}
.co-button-darger:hover{
  background-color: rgba(245,108,108,.9);
}

</style>