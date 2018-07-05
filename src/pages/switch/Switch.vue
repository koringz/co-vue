<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h2 class="default-h1">
        <span class="padding-left-20 border-line-left">开关</span>
      </h2>
    	<co-switch v-model="value2" activeText="失效" add-active-text="生效"></co-switch>
    </div>
    <div class="padding-30">
      <h2 class="default-h1">
        <span class="padding-left-20 border-line-left">不可点击的开关</span>
      </h2>
      <co-switch v-model="value1" activeText="选中" disabled add-active-text="未选择"></co-switch><br><br>
    </div>
  </div>
</template>
<script>
import {coSwitch} from '../../components';

export default {
  
  data() {
  	return {
  		value1: false,
  		value2: true
  	}
  },

  methods: {

  },

  components: {
  	coSwitch
  }

}
</script>