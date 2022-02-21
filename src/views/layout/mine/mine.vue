<template>
  <div class="mine-container">
    <div v-if="user" class="header">
      <div class="base-info">
        <div class="left">
          <van-image
            round
            :src="userinfo.photo"
            class="avatar"
            fit="cover"
          />
          <span class="username">{{ userinfo.name }}</span>
        </div>
        <div class="right">
          <van-button
            round
            size="mini"
            to="/user/profile"
          >编辑资料
          </van-button>
        </div>
      </div>

      <div class="data-status">
        <div class="data-item">
          <span class="count">{{ userinfo.art_count }}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.follow_count }}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.fans_count }}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{ userinfo.like_count }}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div v-else class="header">
      <div class="not-login">
        <div class="not-login-btn" @click="goLogin">
          <img class="pic" src="~@/assets/mobile.png" alt="">
          <span class="title">登录/注册</span>
        </div>
      </div>
    </div>
    <van-grid column-num="2" class="grid-nav" clickable>
      <van-grid-item class="grid-item">
        <template #icon>
          <i class="iconfont icon-shoucang"></i>
        </template>
        <template #text><span class="text">收藏</span></template>
      </van-grid-item>

      <van-grid-item class="grid-item">
        <template #icon>
          <i class="iconfont icon-lishi"></i>
        </template>
        <template #text><span class="text">历史</span></template>
      </van-grid-item>

    </van-grid>

    <van-cell title="消息通知" is-link class="msg"/>
    <van-cell title="小智同学" is-link/>
    <van-button v-if="user" type="primary" block class="logout" @click="doLogout">退出登录</van-button>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { getUserinfo } from '@/api/user'

export default {
  name: 'mine',
  data () {
    return {
      userinfo: {}
    }
  },

  async created () {
    if (this.user) {
      try {
        const { data } = await getUserinfo()
        this.userinfo = data.data
      } catch (e) {
        this.$toast('获取信息失败,请稍后重试')
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    doLogout () {
      this.$dialog.confirm({
        title: '确认退出吗'
      }).then(() => {
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('cancel')
      })
    }
  }

}
</script>

<style scoped lang="less">
.mine-container {
  .header {
    height: 361px;
    background: url("~@/assets/banner.png") no-repeat;
    background-size: cover;
  }

  .not-login {
    height: 100%;
    display: flex;
    justify-content: center;

    .not-login-btn {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .pic {
        width: 132px;
        height: 132px;
      }

      .title {
        color: #ffffff;
        margin-top: 15px;
        font-size: 28px;
      }
    }
  }

  .base-info {
    display: flex;

    height: 231px;
    padding: 76px 32px 23px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      .avatar {
        width: 132px;
        height: 132px;
        border: 4px solid #fff;
        box-sizing: border-box;
      }

      .username {
        margin-left: 23px;
        font-size: 30px;
        color: #ffffff;
      }
    }
  }

  .data-status {
    height: 130px;
    display: flex;

    .data-item {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #ffffff;

      .count {
        font-size: 36px;
      }

      .text {
        font-size: 23px;
      }
    }
  }

  .grid-nav {
    .grid-item {
      height: 141px;

      i.iconfont {
        font-size: 45px;
      }

      .icon-shoucang {
        color: #eb5253;
      }

      .icon-lishi {
        color: #ff9d1d;
      }

      span.text {
        font-size: 28px;
      }
    }
  }

  .msg {
    margin-top: 10px;
  }

  .logout {
    margin-top: 10px;
    background-color: #ffffff;
    border: none;
    color: #d86262;
  }
}

</style>
