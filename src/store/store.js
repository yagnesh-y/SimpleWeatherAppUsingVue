import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cities: [{ name: 'Hyderabad' }]
  },
  getters: {
    showCities: state => {
      console.log('called...');
      return state.cities;
    }
  },
  mutations: {
    addCity: (state, payload) => {
      state.cities.push({ name: payload });
      console.log(state.cities);
    }
  },
  actions: {
    addCity: (context, payload) => {
      context.commit('addCity', payload);
    }
  }
});
