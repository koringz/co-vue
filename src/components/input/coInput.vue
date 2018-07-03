<template>
	<div class="co-input"
		:class="[
			inputSize ? 'co-input--' + inputSize : '',
			{
				'co-input-group': append || prepend,
				'is-disable': inputDisabled,
				'co-input--prepend': prepend,
				'co-input--append': append,
				'co-input--prefix': prefixIcon,
				'co-input--suffix': suffixIcon,
			}
		]"
	>
		<template>
			<!-- 前置元素 -->
			<div class="co-input-prepend" v-if="prepend">
				<slot name="prepend" ></slot>
			</div>
			<input 
				:tabIndex="tabIndex"
				class="co-input-inner"
				:type="type"
				:disabled="inputDisabled"
				:value="currentValue"
				@input="handleInput"
				@focus="handleFocus"
				@change="handleChange"
				v-bind="$attrs"
				ref="input"
				:aria-label="label"
			>
			<!-- 前置内容 -->
			<span class="co-input-prefix" v-if="prefixIcon">
				<slot name="prefix" ></slot>
				<i class="co-input-icon"
					v-if="prefixIcon"
					:class="prefixIcon">
				</i>
			</span>
			<!-- 后置内容 -->
			<span class="co-input-suffix" v-if="suffixIcon">
				<slot name="suffix" ></slot>
				<i class="co-input-icon"
					v-if="suffixIcon"
					:class="suffixIcon">
				</i>
			</span>
			<!-- 后置元素 -->
			<span class="co-input-append" v-if="append">
				<slot name="append" ></slot>
			</span>
		</template>
	</div>
</template>
<script>
export default {
	name: 'coInput',

	data() {
		return {
			currentValue: this.value == 'undefined' ? '' : this.value
		}
	},

	props: {
		tabIndex: [String, Number],
		type: {
			type: String,
			default: 'text'
		},
		disabled : {
			type: Boolean,
			default: false
		}, 
		inputSize: [String, Number],
		value: [String, Number],
		prefixIcon: String,
		suffixIcon: String,
		label: String,
		prepend: Boolean,
		append: Boolean,
	},

	computed: {
		inputDisabled() {
			return this.disabled || {}.disabled;
		}
	},

	methods: {
		handleInput() {
		},
		
		handleFocus() {
		},
		
		handleChange() {
		},
	}
}
</script>
<style lang="less">
.co-input{
	position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
/*如果添加了slot节点 就需要这个类触发*/
.co-input-group {
    line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
}
.co-input-inner{
	-webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.co-input-append, 
.co-input-prepend {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
}
.co-input-append {
    border-left: 0;
}
.co-input-prepend {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.co-input--prepend .co-input-inner, .co-input-append {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.co-input--append .co-input-inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.co-input--prefix .co-input-inner {
    padding-left: 30px;
}
.co-input-prefix {
    position: absolute;
    left: 5px;
    top: 0;
    color: #c0c4cc;
}
.el-input--suffix .el-input-inner {
    padding-right: 30px;
}
.co-input-suffix {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
}
.co-input-icon {
    width: 25px;
    line-height: 40px;
}
.co-input-icon, .el-input-prefix {
    height: 100%;
    text-align: center;
    transition: all .3s;
}
[class*=" co-icon-"], [class^=co-icon-]{
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/*下次*/
.default-h1{
	padding-bottom: 36px;
	text-align: left;
	font-size: 20px;
	font-weight: 400;
	color: #666;
}
.padding-30:hover .border-line-left{
	border-left-color: gray;
}
.horizontal-center{
	width: 600px;
	margin: 0 auto;
}
.border-line-left{
	border-left: 2px solid #FEE71D;
}
.padding-left-20{
	padding-left: 20px;
}
.padding-30{
	padding: 30px 0;
}
</style>

