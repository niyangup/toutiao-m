<template>
  <div class="channel-edit-container">
    <div class="title">
      <span class="left">我的频道</span>
      <van-button round size="mini" class="edit-btn">编辑</van-button>
    </div>

    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 3"
        :key="value"
        icon="clear"
        text="文字"
        class="grid-item"/>
    </van-grid>

    <div class="title">
      <span class="left">频道推荐</span>
    </div>

    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
        v-for="value in 3"
        :key="value"
        text="文字"
        class="grid-item"
        icon="plus"/>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'channel-edit'
}
</script>

<style scoped lang="less">
.channel-edit-container {
  padding-top: 85px;

  .title {
    margin: 0 30px;
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

      .van-grid-item__text {
        font-size: 28px;
        color: #222;
      }

      .van-grid-item__icon {
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

      .van-grid-item__text {
        margin-top: 0;
      }
    }
  }
}

</style>
