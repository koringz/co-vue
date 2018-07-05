<template>
  <div class="horizontal-center">
    <div class="padding-30">
    	<h2 class="default-h1">
    		<span class="padding-left-20 border-line-left">计数器</span>
    	</h2>
		<co-input-number v-model="num1" :min=".05" :max="6.05" :step="0.5" @change="handleChange" ></co-input-number>
	</div>
    <div class="padding-30">
    	<h2 class="default-h1">
    		<span class="padding-left-20 border-line-left">不可点击</span>
    	</h2>
		<co-input-number :disabled='true' v-model="num2"></co-input-number>
	</div>
  </div>
</template>
<script>
import {coInputNumber} from '../../components';

export default {

	data() {
		return {
			num1: 1.05,
			num2: 1,
		}
	},

	methods: {
		handleChange(val) {
			console.log(val)
		}
	},

	components: {
		coInputNumber
	}
}
</script>
