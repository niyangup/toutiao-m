<template>
  <div class="follow-user-container">
    <van-button
      v-if="!article.is_followed"
      class="follow-btn"
      type="info"
      color="#3296fa"
      round
      :loading="isFollowLoading"
      size="small"
      icon="plus"
      @click="onFollow"
    >关注
    </van-button>
    <van-button
      v-else
      class="follow-btn"
      round
      @click="onFollow"
      size="small"
    >已关注
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'follow-user'
}
</script>

<style scoped>

</style>
