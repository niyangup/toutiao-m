<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar" fixed>
      <template #title>
        <van-button class="search-btn" type="info" round size="mini" icon="search">
          搜索
        </van-button>
      </template>
    </van-nav-bar>

    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab :title="item.name " v-for="item in channels" :key="item.id">
        <article-list :id="item.id"></article-list>
      </van-tab>

      <template #nav-right>
        <div class="more-container" @click="isChannelsEdit=true">
          <i class="iconfont icon-gengduo more-icon"></i>
        </div>
      </template>
    </van-tabs>

    <van-popup
      v-model="isChannelsEdit"
      closeable
      position="bottom"
      close-icon-position="top-left"
      :style="{ height: '100%' }"
    >
      <ChannelEdit></ChannelEdit>
    </van-popup>
  </div>
</template>

<script>
import { getUserChannel } from '@/api/user'
import ArticleList from '@/views/layout/home/components/article-list'
import ChannelEdit from '@/views/layout/home/components/channel-edit'

export default {
  name: 'home',
  components: {
    ChannelEdit,
    ArticleList
  },
  data () {
    return {
      active: 0,
      channels: [],
      isChannelsEdit: false
    }
  },
  created () {
    getUserChannel().then(({ data: { data: channelList } }) => {
      this.channels = channelList.channels
    }).catch(reason => {
      console.log(reason)
    })
  }
}
</script>

<style scoped lang="less">

.home-container {
  margin-bottom: 100px;
  margin-top: 174px;

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
    position: fixed;
    z-index: 1;
    top: 92px;
    left: 0;
    right: 0;
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
