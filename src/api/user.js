import request from '@/utils/request'

export function login (mobile, code) {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}
