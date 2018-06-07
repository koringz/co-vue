<template>
  <div>
    <h1> test pages </h1>
    <div>cur_num <strong>{{cur_num}}</strong></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: mapState({
    cur_num: (state) => state.num
  }),
  created() {
    this.defaultUrlParams();
    this.self();
  },
  watch: {
    '$route': 'getUrlParams'
  },
  methods : {

    getUrlParams(opt) {
      console.log(opt);
      console.log(this)
    },

    defaultUrlParams(opt) {
      console.log(this)
    },

    self() {
      console.log(this)
    }
  }
}
</script>
<style lang="less" scoped>
@yellow: #5B7492;

h1{
  color: @yellow
}
</style>