<template>
	<div class="horizontal-center">
    	<div class="padding-30">
			<h2 class="default-h1">
	          <span class="padding-left-20 border-line-left">进度步骤</span>
	        </h2>{{active}}
			<co-steps :active="active" final-status="success">
				<co-step title="步骤1"></co-step>
				<co-step title="步骤2" icon="fab fa-mixcloud" :size="30"></co-step>
				<co-step title="步骤3"></co-step>
			</co-steps>

			<div class="padding-30"></div>

			<co-button type="default" @event="handleChange">下一步</co-button>
		</div>
	</div>
</template>
<script>
import {coSteps,coStep} from '../../components';
import {coButton,coButtonGroup} from '../../components'

export default {
	components: {
		coStep,coSteps,coButton
	},

	data() {
		return {
			active: 0
		}
	},

	methods: {
		handleChange() {
			this.active++
			if(this.active > 3) this.active = 0
		}
	}
}
</script>
<style lang="less">

</style>

