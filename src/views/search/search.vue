<template>
  <div class="search-container">
    <form class="search-top" action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        background="#3296fa"
        @focus="isShowResult=false"
      />
    </form>

    <search-result v-if="isShowResult" :searchText="searchText"/>
    <search-history v-else-if="!searchText"/>
    <search-suggestion v-else :searchText="searchText" @search="onSearch"/>

  </div>
</template>

<script>
import { Toast } from 'vant'
import SearchHistory from '@/views/search/components/search-history'
import SearchSuggestion from '@/views/search/components/search-suggestion'
import SearchResult from '@/views/search/components/search-result'

export default {
  name: 'search',
  components: {
    SearchResult,
    SearchSuggestion,
    SearchHistory
  },
  data () {
    return {
      searchText: '',
      isShowResult: false
    }
  },
  methods: {
    onSearch (val) {
      this.searchText = val
      this.isShowResult = true
    },
    onCancel () {
      Toast('取消')
    }
  }
}
</script>

<style scoped lang="less">
.search-container {
  margin-top: 108px;

  .van-search__action {
    color: #ffffff;
  }

  .search-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
