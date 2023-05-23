import Vue from "vue";
import Vuex from "vuex"
import { createStore } from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        filters: {}
    },
    actions: {
        filterUsers({commit}, payload){
            commit('updateFilters', payload)
        }
    },
    mutations: {
        updateFilters(state, payload){
            state.filters = payload
        }
    },
    getters: {
        filtersParam(state){
            return state.filters
        }
    }
});

export default store;