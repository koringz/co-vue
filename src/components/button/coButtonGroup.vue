<template>
  <div class="co-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'coButtonGroup',

    data() {
    	return {

    	}
    },

    methods: {

    }
  };
</script>
<style lang="less">
.co-button-group{
	position: relative;
	box-sizing: border-box;
}
.co-button-group:before,.co-button-group:after{
	display: table;
	content: ''
}
.co-button-group:before{
	clear: both;
}
.co-button-group:after{
	clear: both;
}
</style>