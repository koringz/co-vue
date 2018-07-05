<template>
	<div 
		:class="[
			'co-input-number',
			inputNumberSize ? 'co-input-number-' : inputNumberSize,
			{ 'is-disabled': inputNumberDisabled }
		]"
	>
		<span
			class="co-input-number-decrease"
			role="button"
			:class="{ 'is-disabled': minDisabled }"
			@click="decrease"
			@keydown.enter="decrease">
		<i :class="`co-icon-${gesture ? 'arrow-down' : 'minus fas fa-minus'}`"></i>
		</span>

		<span
			class="co-input-number-increase"
			role="button"
			:class="{ 'is-disabled': maxDisabled }"
			@click="increase"
			@keydown.enter="increase">
		<i :class="`co-icon-${gesture ? 'arrow-up' : 'plus fas fa-plus'}`"></i>
		</span>


	     <co-input 
	       ref="input"
	      :value="currentValue"
		  :size="inputNumberSize"
		  :min="min"
		  :max="max"
		  :name="name"
		  :label="label"
		  :disabled="inputNumberDisabled"
	      @keydown.up.native.prevent="increase"
	      @keydown.down.native.prevent="decrease"
	      @blur="handleBlur"
	      @focus="handleFocus"
	      @change="handleInputChange">
	     ></co-input>
	</div>
</template>
<script>


export default {
	name: 'coInputNumber',

	data() {
		return {
			currentValue: 0,
		}
	},

	props: {
		step: { //每次加几个数
			type: Number,
			default: 1
		},
		inputNumberSize: Number,
		type: {
			type: String,
			default: 'text'
		},
		label: String,
		value: {},
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		name: String,
		disabled:Boolean, 
		gesture: Boolean,
		precision: {
			type: Number,
			validate(val) {
				return val >= 0 && val === parseInt(val, 10)
			}
		}
	},

	watch: {
		value: {
			immediate: true,
			handler (value) {
				var newVal = value === undefined ? value : Number(value);
				if(newVal >= this.max) newVal = this.max;
				if(newVal <= this.min) newVal = this.min;
				this.currentValue = newVal;
				this.$emit('input',newVal);
			}
		},
	},

	computed: {
		minDisabled() {
			this._increase(this.value, this.step) < this.min;
		},
		maxDisabled() {
			this._decrease(this.value, this.step) > this.max;
		},
		currentInputValue() {
			let curValue = this.currentValue;
			if(typeof curValue === "number" && this.precision !== undefined){
				return curValue.toFixed(this.precision);
			}
			else {
				return curValue;
			}
		},
		inputNumberDisabled() {
			return this.disabled || {}.disabled
		}
	},

	methods: {
		increase(value) {
			if(this.inputNumberDisabled || this.maxDisabled) return;
			let val = this.value || 0;
			let newVal = this._increase(val, this.step) || 0;
			this.setCurrentValue(newVal)
		},
		decrease(value) {
			if(this.inputNumberDisabled || this.minDisabled) return ;
			let val = this.value || 0;
			let newVal = this._decrease(val, this.step) || 0;
			this.setCurrentValue(newVal)
		},
		_increase(val, step) {
			return parseFloat(val) + parseFloat(step);
		},
		_decrease(val, step){
			return parseFloat(val) - parseFloat(step);
		},

		handleBlur() {
			this.$emit('blur', event);
			this.$refs.input.setCurrentValue(this.currentInputValue);
		},
		handleFocus() {
        	this.$emit('focus', event);
		},
		handleInputChange(value) {
			var newVal = value == '' ? undefined : Number(value);
			if(!isNaN(newVal) || newVal.length) {
				this.setCurrentValue(newVal)
			}
		},

		setCurrentValue(newVal) {
			var oldVal = this.currentValue;
			if(typeof newVal == "number") {
				newVal = parseFloat(Number(newVal).toFixed(2))
			}

			if(newVal >= this.max) newVal = this.max;
			if(newVal <= this.min) newVal = this.min;

			if(oldVal == newVal) return;
			this.$emit('input',newVal);
			this.$emit('change',newVal, oldVal);
			this.currentValue = newVal;
		}
	},

	updated() {
		if(this.$refs.input) return;
		const innerInput = this.$refs.input.$refs.input;
		innerInput.setAttribute('aria-valuenow',this.currentValue);
	}
}
</script>
<style lang="less">
.co-input-number {
    position: relative;
    display: inline-block;
    width: 180px;
    line-height: 38px;
}
.co-input-number span:hover{
	color: #409EFF;
}
.co-input-number:hover input{
	border-color: #409EFF;
}
.co-input-number-decrease, .co-input-number-increase {
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
}
.co-input-number-decrease {
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #dcdfe6;
}

.co-input-number-increase {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
}

.co-input-number .co-input-inner{
	-webkit-appearance: none;
	padding-left: 50px;
	padding-right: 50px;
	text-align: center;
}
.co-input-number.is-disabled .co-input-number-decrease, .co-input-number.is-disabled .co-input-number-increase,
.co-input-number.is-disabled .co-input-inner {
    border-color: #e4e7ed;
    color: #e4e7ed;
}
</style>

