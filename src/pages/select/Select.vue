<template>
	<div class="horizontal-center">
    	<div class="padding-30">
    		<h2 class="default-h1">
	          <span class="padding-left-20 border-line-left">下拉菜单</span>
	        </h2>
			<co-select 
				v-model="active" 
				:width="50" 
				:max="10">
				<co-option 
					query="options"
					v-for="item in options" 
					:value="item.label"
					:key="item.label"
					:label="item.value"
				></co-option>
			</co-select>
		</div>
	</div>
</template>
<script>
import {coSelect,coOption} from '../../components';

export default {
	components: {
		coSelect,coOption
	},

	data() {
		return {
			active: '黄金糕',
			options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }]
		}
	},

}
</script>
<style lang="less">

</style>

