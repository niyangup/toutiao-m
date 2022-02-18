<template>
  <div class="channel-edit-container">
    <div class="title">
      <span class="left">我的频道</span>
      <van-button round size="mini" class="edit-btn" @click="isEditing=!isEditing">{{
          !isEditing ? '编辑' : '完成'
        }}
      </van-button>
    </div>

    <van-grid :gutter="10">
      <van-grid-item
        v-for="(item,i) in mineChannels"
        :key="item.id"
        @click="adjustMineChannel(item,i)"
        class="grid-item">
        <template #text>
          <span class="van-grid-item__text" :class="{'active-item':i===index}"> {{ item.name }}</span>
        </template>

        <template #icon>
          <van-icon name="clear" v-show="isEditing&&!fixChannelIds.includes(item.id)"/>
        </template>
      </van-grid-item>
    </van-grid>

    <div class="title">
      <span class="left">频道推荐</span>
    </div>

    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
        v-for="item in recommendChannels"
        :key="item.id"
        class="grid-item"
        @click="adjustChannel(item)"
        icon="plus">
        <template #text>
          <span class="van-grid-item__text">{{ item.name }}</span>
        </template>

      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getAllChannel } from '@/api/channel'

export default {
  name: 'channel-edit',
  props: {
    mineChannels: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isEditing: false,
      fixChannelIds: [0]
    }
  },
  methods: {
    adjustChannel (item) {
      this.mineChannels.push(item)
    },
    adjustMineChannel (item, index) {
      if (this.isEditing && !this.fixChannelIds.includes(item.id)) {
        this.$emit('updateActiveIndex', index, false)
        this.mineChannels.splice(index, 1)
      } else {
        this.$emit('updateActiveIndex', index)
      }
    }
  },
  computed: {
    recommendChannels () {
      const mineChannelIds = this.mineChannels.map(value => value.id)
      return this.allChannels.filter(value => !mineChannelIds.includes(value.id))
    }
  },
  async created () {
    try {
      const { data } = await getAllChannel()
      this.allChannels = data.data.channels
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="less">
.channel-edit-container {
  padding-top: 85px;

  .title {
    margin: 30px 30px;
    display: flex;
    justify-content: space-between;

    span.left {
      font-size: 32px;
      color: #333333;
    }

    .edit-btn {
      width: 104px;
      height: 48px;
      font-size: 26px;
      color: #f85959;
      border: 1px solid #f85959;
      line-height: 48px;
    }
  }

  .grid-item {
    width: 160px;
    height: 86px;

    /deep/ .van-grid-item__content {
      white-space: nowrap;
      background-color: #f4f5f6;

      .van-grid-item__icon-wrapper {
        position: unset;
      }

      .van-grid-item__text {
        font-size: 28px;
        color: #222;
        margin-top: 0;
      }

      .active-item {
        color: #f85959;
      }

      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        color: #cacaca;
        z-index: 3;
        font-size: 30px;
      }
    }
  }

  .recommend-grid {
    /deep/ .van-grid-item__content {
      flex-direction: row;

      .van-icon-plus {
        font-size: 28px;
        margin-right: 6px;
      }
    }
  }
}

</style>
