import { createStore } from 'vuex'

export default createStore({
  state: {
    plan: {},
  },
  getters: {
    getPlan: state => {
      return state.plan
    }
  },
  mutations: {
    SET_PLAN (state, plan) {
      state.plan = plan
    },
  },
  actions: {
    async setPlan ({ commit }, payload) {
      try {
        commit('SET_PLAN', payload)
      } catch (error) {
        console.log('Erro no Store - setPlan', error)
      }
    }
  }
})