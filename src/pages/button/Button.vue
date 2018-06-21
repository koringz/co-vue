<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h1 class="default-h1"><span class="padding-left-20 border-line-left">基础展示</span></h1>
      <co-button-group>
        <co-button>默认按钮</co-button>
        <co-button type="primary">主要按钮</co-button>
        <co-button type="success">成功按钮</co-button>
        <co-button type="info">信息按钮</co-button>
        <co-button type="warning">警告按钮</co-button>
        <co-button type="darger">危险按钮</co-button>
      </co-button-group>
    </div>
  </div>
</template>
<script>
import {coButton,coButtonGroup} from '../../components'

export default {
  data () {
    return {
    }
  },
  watch: {
  },
  created() {
  },
  methods : {
  },
  components : {
    coButton,
    coButtonGroup
  }
}
</script>
<style lang="less" scoped>
  .horizontal-center{
    width: 800px;
    margin: 0 auto;
  }
  .default-h1{
    padding-bottom: 36px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #666;
  }
  .border-line-left{
    border-left: 2px solid #FEE71D;
  }
  .padding-30:hover .border-line-left{
    border-left-color: gray;
  }
  .padding-left-20{
    padding-left: 20px;
  }
  .padding-30{
    padding: 30px 0;
  }
  .co-button-group .co-button{
    margin-left: 12px
  }
</style>
