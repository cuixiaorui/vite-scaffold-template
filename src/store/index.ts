import { createStore } from 'vuex'

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++
    },
  },
  actions: {},
  modules: {},
})
