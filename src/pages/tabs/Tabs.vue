<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h2 class="default-h1">
        <span class="padding-left-20 border-line-left">切换</span>
      </h2>
      <co-tabs :tabTitles="setTabTitle" :tabWindows="3">
        <div class=""> 编号管理 </div>
        <div class=""> 分类管理 </div>
        <div class=""> 内容管理 </div>
      </co-tabs>
    </div>
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