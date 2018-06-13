<template>
	<div class="co-collapse-item">
		<div 
		class="co-collapse-item__header" 
		role="button"
		v-on:click="handleHeaderClick"
		:class="{
			'is-active': isActive
		}"
		>
			<i class="co-collapse-item__arrow co-icon-arrow__right"></i>
			<span name="title"><slot name="title">{{title}}</slot></span>
		</div>
		<div 
		class="co-collapse-item__wrap"
		v-show="isActive"
		>
			<div class="co-collapse-item__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'coCollapseItem',
		data() {
			return {
				isClick: false,
			}
		},
		props: {
			title: String,
			name: {
				type: [String,Number],
				default: []
			}
		},
		inject: ['collapse'],
		computed: {
			isActive(val) {
				return this.collapse.activeNames.indexOf(this.name) > -1
			}
		},
		methods: {
			handleHeaderClick() {
				this.$emit('item-click',this);
				this.isClick = true;
			}
		}
	}
</script>
<style>
.co-collapse-item{
	width: 100%;
}
	.co-collapse-item__header{
		height: 46px;
		line-height: 46px;
		border-bottom: 1px solid #ededed;
		text-align: left;
		font-size: 14px;
		font-weight: 500;
		transition: border-bottom-color .3s;
		cursor: pointer;
		outline: none;
		background-color: #fff; 
		color: #333;
	}
	.co-collapse-item__header.is-active{
		border-bottom-color: transparent; 
	}
		.co-collapse-item__arrow{

		}
		.co-icon-arrow__right{

		}

	.co-collapse-item__wrap{
		background-color: #fff;
		border-bottom: 1px solid #ededed;
		overflow: hidden;
		text-align: left;
	}
		.co-collapse-item__content{
			padding-bottom: 22px;
			font-size: 13px;
			line-height: 1.666666;
		}
</style>