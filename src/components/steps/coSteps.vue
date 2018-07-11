<template>
	<div class="co-steps"
	:class="[
		!simple ? 'co-steps-' + direction: '',
		simple? 'co-steps-simple': ''
	]">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'co-steps',

	data() {
		return {
			steps: []
		}
	},

	props:{
		direction: {
			type: String,
			default: 'horizontal'
		},

		active: Number,
		
		simple: Boolean,

		finalStatus: {
			type: String,
			default: 'finish'
		},
		processStatus: {
			type: String,
			default: 'process'
		},
	},


	watch: {
		active(newVal, oldVal) {
			this.$emit('change', newVal , oldVal);
		},

		steps(steps) {
			steps.forEach((child, index) => {
				child.index = index
			})
		}
	}
}
</script>
<style lang="less">
.co-steps {
    display: flex;
}
.co-steps-vertical {
    height: 100%;
    flex-flow: column;
}
.co-steps-horizontal {
    white-space: nowrap;
}
</style>

