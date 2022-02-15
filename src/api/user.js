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
