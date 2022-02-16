<template>
  <div class="article-list-container">

    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh" success-text="刷新成功">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <article-item :article="item" v-for="item in list" :key="item.art_id"></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import { getArticle } from '@/api/article'
import ArticleItem from '@/components/article-item/article-item'

export default {
  name: 'article-list',
  components: { ArticleItem },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      pre_timestamp: 1556789000001,
      error: false,
      isRefreshLoading: false
    }
  },
  methods: {
    async onRefresh () {
      this.finished = false

      try {
        this.loading = true
        await this.onLoad(false)
      } catch (e) {
      }

      this.isRefreshLoading = false
    },
    async onLoad (append = true) {
      try {
        const { data } = await getArticle({
          channel_id: this.id,
          timestamp: this.pre_timestamp,
          with_top: 0
        })
        const {
          // eslint-disable-next-line camelcase
          pre_timestamp,
          results
        } = data.data
        if (append) {
          this.list.push(...results)
        } else {
          this.list.unshift(...results)
        }

        if (results.length) {
          // eslint-disable-next-line camelcase
          this.pre_timestamp = pre_timestamp
        } else {
          this.finished = true
        }
        this.loading = false
      } catch (e) {
        console.log('获取文章失败', e)
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

.article-list-container {
  height: 79vh;
  overflow-y: auto;
}
</style>
