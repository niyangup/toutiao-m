import request from '@/utils/request'

export function getSearchSuggestions (q) {
  return request.get('app/v1_0/suggestion', {
    params: {
      q
    }
  })
}

export function getSearchResult (params) {
  return request.get('/app/v1_0/search', {
    params
  })
}
