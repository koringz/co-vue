<template>
	<div class="horizontal-center">
		<div class="padding-30">
			<h1 class="default-h1"><span class="padding-left-20 border-line-left">基础展示</span></h1>
			<co-collapse v-model="activeNames" @change="handleChange">
				<co-collapse-item title="一致性 Consistency" name="1">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
	    			<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</co-collapse-item>
				<co-collapse-item title="反馈 Feedback" name="2">
				    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</co-collapse-item>
				<co-collapse-item title="一致性 Consistency" name="3">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
	    			<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</co-collapse-item>
				<co-collapse-item title="反馈 Feedback" name="4">
				    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</co-collapse-item>
			</co-collapse>
		</div>
		<div class="padding-30">
			<h1 class="default-h1"><span class="padding-left-20 border-line-left">手风琴效果</span></h1>
			<co-collapse v-model="activeNames" @change="handleChange" accordion>
				<co-collapse-item title="一致性 Consistency" name="1">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
	    			<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</co-collapse-item>
				<co-collapse-item title="反馈 Feedback" name="2">
				    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</co-collapse-item>
				<co-collapse-item title="一致性 Consistency" name="3">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
	    			<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</co-collapse-item>
				<co-collapse-item title="反馈 Feedback" name="4">
				    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</co-collapse-item>
			</co-collapse>
		</div>
	</div>
</template>
<script>
import {coCollapse} from '../../components'
import {coCollapseItem} from '../../components'

export default {
  data () {
    return {
    	activeNames: ['1']
    }
  },
  methods: {
  	handleChange(val) {
  		console.log(val)
  	}
  },
  components : {
    coCollapse,
    coCollapseItem
  }
}
</script>
<style>
	.default-h1{
		padding-bottom: 36px;
		text-align: left;
		font-size: 20px;
		font-weight: 400;
		color: #666;
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