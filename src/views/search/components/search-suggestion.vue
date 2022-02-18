<template>
  <div class="search-suggestion">
    <van-cell icon="search" v-for="(item,index) in suggestions" :key="index" @click="$emit('search',item)">
      <template #title>
        <div v-html="highlightTitle(item)"></div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
import { debounce } from 'loadsh/function'

export default {
  name: 'search-suggestion',
  data () {
    return {
      suggestions: []
    }
  },
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  methods: {
    async handleSearchSuggestion (newValue) {
      try {
        const { data } = await getSearchSuggestions(newValue)
        this.suggestions = data.data.options
      } catch (e) {
        console.log('请求失败', e)
      }
    },
    highlightTitle (title) {
      const reg = new RegExp(this.searchText, 'gi')
      return title.toString().replace(reg, `<span class="active">${this.searchText}</span>`)
    }
  },
  watch: {
    searchText: {
      immediate: true,
      handler: debounce(function (newValue, oldValue) {
        this.handleSearchSuggestion(newValue)
      }, 500)
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .active {
  color: #3296fa;
}

</style>
