import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users
    }
  },
  actions: {
    async getUsers({commit}) {
      return await axios('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', {
            method: 'GET'
          })
          .then((response) => {
            commit('setUsers', response.data)
          })
    }
  },
  getters: {
    users(state) {
      return state.users
    }
  }
})
