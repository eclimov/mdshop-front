import {fetchRate} from "@/api/currency";


export default {
  namespaced: true,
  state: {
    rate: {},
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      fetchRate({get_xml: 1, ...params})
        .then(result => {
          commit('mutateRate', result.data)
        })
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateLoading: (state, loading) => {
      state.loading = loading
    },
    mutateRate: (state, rate) => {
      state.rate = rate
    }
  },
  getters: {
    getRate: (state) => state.rate,
    getLoading: (state) => state.loading
  }
}
