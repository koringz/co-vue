<template>
  <button 
  role="button" 
  class="co-button" 
  :class="[
    type ? 'co-button-' + type: '',
    round ? 'co-button-round' : '',
    size ? 'co-button-' + size : '',
  ]"
  v-on:click="$emit('event')"
  >
    <i :class="[
      loading == 'true' ? 'fa fa-spinner faa-spin animated' : ''
    ]"></i>
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
      round:{
        type: Boolean,
        default() {
          return false
        }        
      },
      loading:{
        type: String,
        default() {
          return 'false'
        }
      },
      size: {
        type: String,
        default() {
          return 'medium'
        }
      }
    },

    data() {
      return {

      }
    },

    mounted() {
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
  margin: 0;
  line-height: 1;
  padding: 12.26px 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  box-sizing: border-box;
  *border-radius: 4px !important;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  white-space: nowrap;
  transition: .1s;
}

.co-button-round{
  border-radius: 22.26px;
}
.co-button-default{
  color: #606266;
  background-color: @white;
}
.co-button-default:hover{
  color: #5bb4fe;
  border-color: #c5e2fe;
  background-color: #ebf5fe
}

/*round*/
.co-button-larger.co-button-round{
  *border-radius:  22.26px !important;
  -moz-border-radius: 22.26px;
  -webkit-border-radius: 22.26px;
  -ms-border-radius: 22.26px;
  border-radius: 22.26px;
}
.co-button-medium.co-button-round{
  *border-radius:  18.26px !important;
  -moz-border-radius: 18.26px;
  -webkit-border-radius: 18.26px;
  -ms-border-radius: 18.26px;
  border-radius: 18.26px;
}
.co-button-small.co-button-round{
  *border-radius:  16.26px !important;
  -moz-border-radius: 16.26px;
  -webkit-border-radius: 16.26px;
  -ms-border-radius: 16.26px;
  border-radius: 16.26px;
}
.co-button-mini.co-button-round{
  *border-radius:  14.26px !important;
  -moz-border-radius: 14.26px;
  -webkit-border-radius: 14.26px;
  -ms-border-radius: 14.26px;
  border-radius: 14.26px;
}

/*size*/
.co-button-larger{
  padding: 12.26px 20px;
  font-size: 16px;
}
.co-button-medium{
  padding: 9.808px 16px;
  font-size: 14px;
  *border-radius: 4px !important;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.co-button-small{
  padding: 7.356px 12px;
  font-size: 12px;
  *border-radius: 3px !important;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
}
.co-button-mini{
  padding: 6.13px 10px;
  font-size: 10px;
  *border-radius: 3px !important;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
}




/*message*/
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