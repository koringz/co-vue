<template>
  <div class="box">
    <covu-tabs :tabTitles="setTabTitle" :tabWindows="3">
      <div class=""> 123 </div>
      <div class=""> 345 </div>
      <div class=""> 678 </div>
     </covu-tabs>
  </div>
</template>
<script>
import {covuTabs} from '../../components'

export default {
  data () {
    return {
      setTabTitle: ['编号','分类','内容'],
    }
  },
  components : {
    covuTabs
  }
}
</script>
<style lang="less" scoped>
</style>
