<template>
  <div class="horizontal-center">
    <div class="padding-30">
		<co-input-number v-model="num1" :min=".05" :max="6.05" step="0.5" @change="handleChange" ></co-input-number>
	</div>
  </div>
</template>
<script>
import {coInputNumber} from '../../components';

export default {

	data() {
		return {
			num1: 1.05,
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
<style lang="less">

</style>

