<template>
  <div>
    <co-dialog
    title="提示"
    width="30%"
    >
      <span>正常情况下</span>  
      <div slot="footer">
        <co-button>删除</co-button>
        <co-button type="primary">确定</co-button>
      </div>
    </co-dialog>
  </div>
</template>
<script>
import {coDialog,coButton} from '../../components'

export default {
  data () {
    return {
    }
  },
  components : {
    coDialog,
    coButton
  }
}
</script>
<style lang="less" scoped>
</style>
