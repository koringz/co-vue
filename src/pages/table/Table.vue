<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h2 class="default-h1">
        <span class="padding-left-20 border-line-left">表格</span>
      </h2>
      <co-table activeText="失效" add-active-text="生效">123</co-table>
    </div>
  </div>
</template>
<script>
import {coTable} from '../../components'

export default {
  data () {
    return {
    }
  },
  components : {
    coTable
  }
}
</script>
<style lang="less" scoped>
.box{
  width: 800px;
  margin: 30px auto;
  padding: 20px 30px;
  border: 1px solid #EEE;
}
</style>
