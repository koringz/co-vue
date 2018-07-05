<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h2 class="default-h1">
        <span class="padding-left-20 border-line-left">基础弹出框</span>
      </h2>
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