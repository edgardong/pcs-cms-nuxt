export const state = () => ({
  list: []
})

export const mutations = {
  setArticle (state, data) {
    state.list = data.data
  }
}
