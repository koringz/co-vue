<template>
  <div class="horizontal-center">
    <div class="padding-30">
        <co-input 
        	v-model="input"
        	placeholder="请搜索内容"
        	suffix-icon="fa fa-search">
        </co-input>
      </div>
      <div class="padding-30">
        <co-input 
        	v-model="input"
        	placeholder="请搜索内容"
        	prefix-icon="fa fa-search">
	        	<div slot="prepend">
	        		123
	        	</div>
        </co-input>
      </div>
      <div class="padding-30">
        <co-input 
        	prepend
        	v-model="input"
        	placeholder="请输入内容"
        	>
	        	<div slot="prepend">
	        		http://
	        	</div>
        </co-input>
      </div>
      <div class="padding-30">
        <co-input 
        	append
        	v-model="input"
        	placeholder="请输入内容"
        	suffix-icon="fa fa-search">
	        	<div slot="append">
	        		http://
	        	</div>
        </co-input>
      </div>
  </div>
</template>
<script>

import {coInput} from '../../components';

export default {

	data() {
		return {
			input: ''
		}
	},

	components: {
		coInput
	}
}
</script>
<style lang="less">

</style>

