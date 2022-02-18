<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.art_id" :title="item.title"/>
    </van-list>
  </div>
</template>

<script>
import { getSearchResult } from '@/api/search'

export default {
  name: 'search-result',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await getSearchResult({
          page: this.page,
          per_page: 50,
          q: this.searchText
        })
        this.list.push(...data.data.results)
        this.loading = false
        if (data.data.results) {
          this.page++
        } else {
          this.finished = true
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
