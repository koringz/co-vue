<template>
	<div 
		class="co-step"
		:style="style"
		:class="[
			!isSimple ? `is-${$parent.direction}` : ''
		]"
	>
		<div class="co-step-head" :class="`is-${currentStatus}`">
			<div class="co-step-line">
				<i class="co-step-line__inner" :style="lineStyle"></i>
			</div>
			<div class="co-step-icon" :class="`is-${icon?'icon':'text'}`" :style="{fontSize: size +'px'}" >
				<slot></slot>
				<i :class="[icon ? icon : 'fas fa-check']"></i>
			</div>
		</div>

		<div class="co-step-main">
			<div class="co-step-title" ref="title" :class="`is-${currentStatus}`">
				<slot name="title">{{ title }}</slot>
			</div>
			<div v-if="isSimple" class="co-step-arrow"></div>
			<div v-else class="co-step-description">
				<slot name="description">{{ description }}</slot>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	name: 'co-step',

	data() {
		return {
			initialStatus: '',
			status: false,
			lineStyle: {},
			index: -1 // 初始索引children
		}
	},

	props: {
		title: {
			type: [Number, String],
			default: String
		},
		icon: String,
		size: Number
	},

	beforeCreate() {
		this.$parent.steps.push(this)
	},

	beforeDestroy() {
		var steps = this.$parent.steps
		var index = steps.indexOf(this)
		if(index > -1) {
			steps.splice(index, 1)
		}
	},

	computed: {
		isSimple() {
			return this.$parent.simple
		},

		currentStatus() {
			return this.status || this.initialStatus
		},

		isLast() {
			var all = this.$parent
			return all.steps[all.steps.length - 1] == this
		},

		style() {
			const style = {};
			let wd = 100;

			if(this.isLast) wd /= this.$parent.steps.length

			style.flexBasis = wd / 2 + '%';

			return style;
		},

		description() {
		}
	},

	methods: {
		updateStatus (value) {
			const Cindex = this.$parent.$children[this.index - 1];

			if(value > this.index) {
				this.initialStatus = this.$parent.finalStatus
			}
			else {
				this.initialStatus = 'wait'
			}
			
			// 其中this也可以使用当前的节点调用methods方法 然后再方法里面设置当前的数据填充
			// this.initialStatus 避免第一次执行success 如果没有点击change使用wait状态
			// 如果点击了 value 就是改变 于是initialStatus = success
			// Cindex就是点击的节点
			if(Cindex) Cindex.calceProgress(this.initialStatus);
		},

		calceProgress(status) {
			let style = {}
			let step = 0

			if(status !== 'wait') {
				step = 100
			}
			else{
				step = 0
			}
			style.borderWidth = step ? '1px' : 0

			style.width = step + '%'

			this.lineStyle = style;
		}
	},

	mounted() {
		// 初始化 自动执行一次
		// 需要设置一次 immediate 为true
		// val是通过active自动设置
		// index是根据steps自动匹配
		const unwatch = this.$watch('index',val => {
			this.$watch('$parent.active', this.updateStatus, {immediate: true});
			unwatch()
		})
	}
}
</script>
<style lang="less">
.co-step {
    position: relative;
    flex-shrink: 1;
}

.co-step.is-horizontal {
    display: inline-block;
}
// head
.co-step-head {
    position: relative;
    width: 100%;
}
.co-step-icon {
    position: relative;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    box-sizing: border-box;
    background: #fff;
    transition: .15s ease-out;
}
.co-step-icon.is-text {
    border-radius: 50%;
    border: 2px solid;
    border-color: inherit;
}
.co-step.is-horizontal .co-step-line {
    height: 2px;
    top: 11px;
    left: 0;
    right: 0;
}
.co-step-line {
    position: absolute;
    border-color: inherit;
    background-color: #c0c4cc;
}
.co-step.is-horizontal .co-step-icon {
    position: relative;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    box-sizing: border-box;
    background: #fff;
    transition: .15s ease-out;
}

// main
.co-step-main {
    white-space: normal;
    text-align: left;
}
.co-step-title {
    font-size: 16px;
    line-height: 38px;
}
.co-step-description {
    padding-right: 10%;
    margin-top: -5px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
}

// line
.co-step-line__inner{
	display: block;
    border-width: 1px;
    border-style: solid;
    border-color: #67c23a;
    transition: .15s ease-out;
    box-sizing: border-box;
    width: 0;
    height: 0;
}
.co-step-head.is-success .co-step-icon{
    color: #67c23a;
	border-color: #67c23a;
}
.co-step-title.is-success {
    color: #67c23a;
}
.co-step:last-of-type .co-step-line{
	display: none
}
</style>

