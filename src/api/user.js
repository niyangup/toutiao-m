import request from '@/utils/request'

export function login (mobile, code) {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}

/// 获取验证码
export function sendSms (mobile) {
  return request.get(`/app/v1_0/sms/codes/${mobile}`)
}

export function getUserinfo () {
  return request.get('/app/v1_0/user')
}

export function getUserChannel () {
  return request.get('/app/v1_0/user/channels')
}

// 关注用户
export const following = (target) => {
  return request({
    url: '/app/v1_0/user/followings',
    method: 'POST',
    data: {
      target
    }
  })
}

// 取消关注用户
export const unfollowing = (target) => {
  return request({
    url: '/app/v1_0/user/followings/' + target,
    method: 'DELETE'
  })
}
