import request from '@/utils/request'

export function getArticle (params) {
  return request.get('/app/v1_1/articles', {
    params
  })
}

/**
 * 根据 id 获取指定文章
 */
export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}
