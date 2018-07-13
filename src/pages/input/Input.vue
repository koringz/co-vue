<template>
  <div class="horizontal-center">
    <div class="padding-30">
        <h2 class="default-h1">
          <span class="padding-left-20 border-line-left">搜入框</span>
        </h2>
        <co-input 
          :width="60"
        	v-model="input1"
        	placeholder="请搜索内容">
        </co-input>
      </div>
      <div class="padding-30">
        <h2 class="default-h1">
          <span class="padding-left-20 border-line-left">带搜索的输入框</span>
        </h2>
        <co-input 
          :width="60"
        	v-model="input2"
        	placeholder="请搜索内容"
        	prefix-icon="fa fa-search">
	        	<div slot="prepend">
	        		123
	        	</div>
        </co-input>
      </div>
      <div class="padding-30">
        <h2 class="default-h1">
          <span class="padding-left-20 border-line-left">带链接的输入框</span>
        </h2>
        <co-input 
        	prepend
          :width="60"
        	v-model="input3"
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
        	v-model="input3"
        	placeholder="请输入内容"
          :width="60"
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
      input1: '',
      input2: '',
      input3: '',
		}
	},

	components: {
		coInput
	}
}
</script>
