import axios from 'axios'
import config from '../config'

export const state = () => ({
  list: [],
  pageInfo: {
    page: 1,
    size: 10,
    total: 0
  }
})

export const mutations = {
  setArticle (state, data) {
    state.list = data.data
    state.pageInfo = {
      page: data.current_page,
      size: data.per_page,
      total: data.total
    }
  }
}

export const actions = {
  async getArticleList ({ dispatch, state, commit }, page) {
    const pageInfo = state.pageInfo
    const params = { page: page || pageInfo.page, size: pageInfo.size }
    const { data } = await axios.get(
      `${config.BASE_URL}api/blog/v1/article/pagination`, { params }
    )
    commit('setArticle', data.data)
  }
}
