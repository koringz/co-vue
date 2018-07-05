<template>
	<div class="co-table"
		:class="[
		{
			'co-table-border': border,
			'co-table-hidden': hidden
		},
			tableSize ? 'co-table-' + tableSize : '' 
		]"
	>
	</div>
</template>
<script>

export default {
	name: 'coTable',
	
	data() {
		return {
		}
	},

	props: {
		tableSize: Number,
		hidden: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: false
		}
	},

	methods: {

	}
}
</script>
<style lang="less">
.co-table{
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	flex: 1;
	width: 100%;
	max-width: 100%;
	background-color: #fff;
	font-size: 14px;
	color: #606266;
}
.co-table td, .co-table th {
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
}
.co-table .cell {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>

