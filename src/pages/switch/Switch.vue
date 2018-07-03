<template>
  <div class="horizontal-center">
    <div class="padding-30">
    	<co-switch v-model="value1" activeText="选中" disabled add-active-text="未选择"></co-switch><br><br>
    	<co-switch v-model="value2" activeText="失效" add-active-text="生效"></co-switch>
  	</div>
  </div>
</template>
<script>
import {coSwitch} from '../../components';

export default {
  
  data() {
  	return {
  		value1: true,
  		value2: false
  	}
  },

  methods: {

  },

  components: {
  	coSwitch
  }

}
</script>
<style lang="less" scoped>
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
