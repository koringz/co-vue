<template>
  <div class="box">
    <co-tabs :tabTitles="setTabTitle" :tabWindows="3">
      <div class=""> 123 </div>
      <div class=""> 345 </div>
      <div class=""> 678 </div>
     </co-tabs>
  </div>
</template>
<script>
import {coTabs} from '../../components'

export default {
  data () {
    return {
      setTabTitle: ['编号','分类','内容'],
    }
  },
  components : {
    coTabs
  }
}
</script>
<style lang="less" scoped>
</style>
