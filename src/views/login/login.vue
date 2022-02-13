<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar"/>

    <van-form @submit="onSubmit(user)">
      <van-field
        type="number"
        maxlength="11"
        v-model="user.mobile"
        placeholder="请输入手机号"
        :rules="format.mobile"
      >
        <template #left-icon>
          <i class="iconfont icon-shouji"></i>
        </template>
      </van-field>
      <van-field
        type="number"
        maxlength="6"
        v-model="user.code"
        placeholder="请输入验证码"
        :rules="format.code"
      >
        <template #left-icon>
          <i class="iconfont icon-yanzhengma"></i>
        </template>

        <template #button>
          <van-button class="send-msg-btn" round size="small" type="default">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" class="login-btn" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      format: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|6|7|8]\d{9}$/,
          message: '手机号不合法'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      }
    }
  },
  methods: {
    async onSubmit (user) {
      this.$toast.loading({
        message: 'loading',
        forbidClick: true,
        duration: 0
      })
      try {
        const result = await login(user.mobile, user.code)
        console.log(result)
        this.$toast.success({
          message: 'success'
        })
      } catch (e) {
        this.$toast.success({
          message: 'fail'
        })
        console.error(e)
      }
    }
  }
}
</script>

<style scoped lang="less">

.iconfont {
  font-size: 37px;
}

.send-msg-btn {
  height: 46px;
  width: 158px;
  font-size: 22px;
  line-height: 46px;
  background-color: #ededed;
}

.login-btn-wrap {
  margin: 53px 33px;

  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
