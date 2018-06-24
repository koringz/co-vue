<template>
	<transition>
		<div class="co-dialog">
			<div class="co-dialog-box"
				v-bind:style=" styles() "
				>
				<div class="co-dialog-header">
					<slot name="header">
						<span class="co-dialog-header__title"> {{title}} </span>
						<button
				            type="button"
				            class="co-dialog-header__btn"
				            aria-label="Close"
				            @click="handleClose">
				            <i class="fas fa-times-circle"></i>
				        </button>
					</slot>
				</div>
				<div class="co-dialog-body">
					<slot></slot>
				</div>
				<div class="co-dialog-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	name: 'coDialog',
	
	data() {
		return {
		}
	},

	props: {
		title: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: ''
		}
	},

	methods: {
		styles() {
			var self = this;
			return { 
				width: self.width, 
				marginTop: '30vh'
			}
		},

		handleClose() {
			
		}
	}
}
</script>
<style lang="less">
.co-dialog{
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
}
.co-dialog-header__title{
	line-height: 24px;
	font-size: 18px;
	color: #303133;
}
.co-dialog-header__btn{
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
}
.co-dialog-box{
	position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
}
.co-dialog-header{
	padding: 20px;
    padding-bottom: 10px;
}
.co-dialog-body{
	padding: 30px 20px;
    color: #606266;
    font-size: 14px;
}
.co-dialog-footer{
	padding: 20px;
    padding-top: 10px;
    text-align: right;
    box-sizing: border-box;
}
</style>

