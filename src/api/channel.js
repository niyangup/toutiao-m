import request from '@/utils/request'

export function getAllChannel () {
  return request.get('/app/v1_0/channels')
}

export function addUserChannel (channels) {
  return request.patch('/app/v1_0/user/channels', {
    channels: [channels]
  })
}

export function deleteUserChannel (id) {
  return request.delete(`/app/v1_0/user/channels/${id}`)
}
