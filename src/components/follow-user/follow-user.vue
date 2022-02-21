<template>
  <van-button
    v-if="isFollowed"
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
</template>

<script>
import { following, unfollowing } from '@/api/user'

export default {
  name: 'follow-user',
  model: {
    prop: 'isFollowed',
    event: 'update-followed'
  },
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    },
    userId: {
      type: [Number, String, Object],
      required: true
    }
  },
  data () {
    return {
      isFollowLoading: false
    }
  },
  methods: {
    async onFollow () {
      this.isFollowLoading = true
      try {
        if (this.isFollowed) {
          await unfollowing(this.userId)
        } else {
          await following(this.userId)
        }
      } catch (e) {
        console.log(e)
      }
      this.isFollowLoading = false
      this.$emit('update-followed', !this.isFollowed)
    }
  }
}
</script>

<style scoped>

</style>
