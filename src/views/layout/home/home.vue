<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar">
      <template #title>
        <van-button class="search-btn" type="info" round size="mini" icon="search">
          搜索
        </van-button>
      </template>
    </van-nav-bar>

    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>

      <template #nav-right>
        <div class="more-container">
          <i class="iconfont icon-gengduo more-icon"></i>
        </div>
      </template>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 2
    }
  }
}
</script>

<style scoped lang="less">

.home-container {
  .page-nav-bar {
    .search-btn {
      width: 555px;
      height: 64px;
      background-color: #5babfb;
      border: none;
      font-size: 28px;

      .van-icon {
        font-size: 32px;
      }
    }

    /deep/ .van-nav-bar__title {
      max-width: none;
    }
  }
}

/deep/ .channel-tabs {
  .van-tab {
    min-width: 200px;
    border-right: 1px solid #edeff3;
    font-size: 30px;
    color: #777;
  }

  .van-tabs__wrap {
    height: 82px;
  }

  .van-tab--active {
    color: #333;
  }

  .van-tabs__line {
    width: 31px;
    height: 6px;
    background-color: #3296fa;
    margin-bottom: 8px;
  }

  .more-container {
    position: fixed;
    width: 66px;
    height: 82px;
    right: 0;
    background-color: #fff;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;

    i.more-icon {
      font-size: 33px;
    }

    &:before {
      left: 0;
      position: absolute;
      content: "";
      width: 2px;
      height: 100%;
      background-image: url("~@/assets/gradient-gray-line.png");
      background-size: contain;
    }
  }
}

</style>
