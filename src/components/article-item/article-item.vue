<template>
  <div class="article-item-container">
    <van-cell>
      <template #title>
        <div class="title van-multi-ellipsis--l2">{{ article.title }}</div>
      </template>
      <template #label>
        <div class="cover-wrap" v-if="article.cover.type===3">
          <van-image
            width="100"
            height="100"
            :src="item"
            fit="cover"
            v-for="item in article.cover.images" :key="item"
            class="right-cover"
          />
        </div>
        <div v-else class="label-info-wrap">
          <span>{{ article.aut_name }} </span>
          <span>{{ article.comm_count }}评论 </span>
          <span>{{ article.pubdate }} </span>
        </div>
      </template>

      <template #default v-if="article.cover.type===1">
        <van-image
          class="cover-item"
          fit="cover"
          :src="article.cover.images[0]"
        />
      </template>

    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.article-item-container {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }

  .van-cell__value {
    flex: none;
    width: 232px;
    height: 146px;
    padding-left: 25px;
  }

  .right-cover {
    width: 232px;
    height: 146px;
  }

  .label-info-wrap span {
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap {
    display: flex;
    margin: 30px 0;

    .right-cover {
      flex: 1;
      height: 146px;
      margin-right: 8px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

</style>
