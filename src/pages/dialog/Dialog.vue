<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <div>
        <co-button @event="handleClick">击打开 Dialog</co-button>
        <co-dialog
        title="提示"
        width="30%"
        v-bind:visible.sync="visibleDialog"
        >
          <span>正常情况下</span>
          <div slot="footer">
            <co-button @event="closeClick">删除</co-button>
            <co-button type="primary">确定</co-button>
          </div>
        </co-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import {coDialog,coButton} from '../../components';

export default {
  data () {
    return {
      visibleDialog: false,
      center: false
    }
  },
  methods: {
    handleClick () {
      this.visibleDialog = true;
      this.center = true
    },
    closeClick () {
      this.visibleDialog = false;
    }
  },
  components : {
    coDialog,
    coButton
  }
}
</script>
<style lang="less" scoped>
  .default-h1{
    padding-bottom: 36px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #666;
  }
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
