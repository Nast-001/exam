import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    USERS(state) {
    return state.users;
    }
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios('./db.json',{
        method: 'GET'
      })
      .then(response => {
        commit('SET_USERS_TO_VUEX' , response.data)
      })

    }
  },
  modules: {
  }
})
