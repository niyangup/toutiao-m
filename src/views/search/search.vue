<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        background="#3296fa"
      />
    </form>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast('取消')
    }
  }
}
</script>

<style scoped lang="less">
.search-container {
  .van-search__action {
    color: #ffffff;
  }
}
</style>
