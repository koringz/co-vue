<template>
  <div class="box">
    <co-tabs :tabTitles="setTabTitle" :tabWindows="3">
      <div class=""> 编号管理 </div>
      <div class=""> 分类管理 </div>
      <div class=""> 内容管理 </div>
     </co-tabs>
  </div>
</template>
<script>
import {coTabs} from '../../components'

export default {
  data () {
    return {
      setTabTitle: ['编号管理','分类管理','内容管理'],
    }
  },
  components : {
    coTabs
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
