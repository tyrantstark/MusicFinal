import Vue from 'vue'
import Vuex,{Store} from 'vuex'

import auth from './auth'
import profile from './profile'
import song from './song'
import comment from './comment'
import message from './message'
import conversation from './conversation'
import pagination from './pagination'
import playingSong from './playingSong'




Vue.use(Vuex)

Vue.prototype.$store = new Vuex.Store()
export default new Vuex.Store({
  state : {
    loading: false,
    bottom_player: false
  },
  getters: {
    getLoading: (state) => {
      return state.loading
    },
    getBottomPlayer : (state) => {
      return state.bottom_player
    }
  },
  mutations: {
    setLoading: (state,boolean) => {
      state.loading = boolean
    },
    setBottomPlayer : (state,boolean) => {
      state.bottom_player = boolean
    }
  },
  actions : {
    clearAll({ commit }){
      commit("reset")
  }
  },
  modules: {
    auth,
    profile,
    song,
    comment,
    message,
    conversation,
    pagination,
    playingSong
    },
})
 