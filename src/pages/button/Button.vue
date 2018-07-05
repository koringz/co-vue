<template>
  <div class="horizontal-center">
    <div class="padding-30">
      <h1 class="default-h1"><span class="padding-left-20 border-line-left">基础展示</span></h1>
      <div class="descri title">根据不同提示信息展示的按钮（不同信息展示不同背景颜色）</div>
      <co-button-group>
        <co-button>默认按钮</co-button>
        <co-button type="primary">主要按钮</co-button>
        <co-button type="success">成功按钮</co-button>
        <co-button type="info">信息按钮</co-button>
        <co-button type="warning">警告按钮</co-button>
        <co-button type="darger">危险按钮</co-button>
      </co-button-group>
      <div style="height:32px"></div>
      <co-button-group>
        <co-button round>圆角按钮</co-button>
        <co-button type="primary" round>主要按钮</co-button>
        <co-button type="success" round>成功按钮</co-button>
        <co-button type="info" round>信息按钮</co-button>
        <co-button type="warning" round>警告按钮</co-button>
        <co-button type="darger" round>危险按钮</co-button>
      </co-button-group>
    </div>
    <div class="padding-30">
      <h1 class="default-h1"><span class="padding-left-20 border-line-left">不同尺寸</span></h1>
      <div class="descri title">使用四种不同尺寸的大小设置的button（大，中，小，超小）</div>
      <co-button-group>
        <co-button size="larger">大按钮</co-button>
        <co-button size="medium">中按钮</co-button>
        <co-button size="small">小按钮</co-button>
        <co-button size="mini">超小按钮</co-button>
      </co-button-group>
      <div style="height:32px"></div>
      <co-button-group>
        <co-button round size="larger">大圆角</co-button>
        <co-button round size="medium">中圆角</co-button>
        <co-button round size="small">小圆角</co-button>
        <co-button round size="mini">超小角</co-button>
      </co-button-group>
    </div>
    <div class="padding-30">
      <h1 class="default-h1"><span class="padding-left-20 border-line-left">加载中</span></h1>
      <div class="descri title">刷新加载按钮</div>
      <co-button-group>
        <co-button size="larger" type="primary" loading="true">加载中</co-button>
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