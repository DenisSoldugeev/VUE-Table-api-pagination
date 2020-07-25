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
    },
     createUser: (state, newUser) => {
        state.users.unshift(newUser)
     }
  },
  actions: {
    async getUsers({commit}, link) {
      return await axios(link, {
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
