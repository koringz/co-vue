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
.co-button-group:before{
	display: table;
	content: ''
}
</style>