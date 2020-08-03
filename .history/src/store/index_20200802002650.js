import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    votingCards: []
  },
  getters: {
    getCardsStatus: (state) => {
      return state.votingCards
    }
  },
  mutations: {
    saveCardData (state, {
      id,
      thumb_up,
      thumb_down
    }) {
      state.votingCards[id] = {
        thumb_up: thumb_up,
        thumb_down: thumb_down
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
