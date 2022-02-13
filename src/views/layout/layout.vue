<template>
  <div class="layout-container">
    <router-view></router-view>

    <div class="nav-bar">
      <van-tabbar class="layout-nav-bar" route>
        <van-tabbar-item replace to="/layout/home">
          <span class="text">首页</span>
          <template #icon>
            <i class="iconfont icon-shouye"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/layout/qa">
          <span>问答</span>
          <template #icon>
            <i class="iconfont icon-wenda"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/layout/video">
          <span>视频</span>
          <template #icon>
            <i class="iconfont icon-shipin"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" replace to="/layout/mine">
          <span>我的</span>
          <template #icon>
            <i class="iconfont icon-wode"></i>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  .layout-nav-bar {
    i.iconfont {
      font-size: 40px;
    }

    span.text {
      font-size: 20px;
    }
  }
}

</style>
