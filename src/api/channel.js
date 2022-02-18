import request from '@/utils/request'

export function getAllChannel () {
  return request.get('/app/v1_0/channels')
}
