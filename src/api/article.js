import request from '@/utils/request'

export function getArticle (params) {
  return request.get('/app/v1_1/articles', {
    params
  })
}
