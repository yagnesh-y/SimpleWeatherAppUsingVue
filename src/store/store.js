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
      //add only if city doesnt already exists..
      var bool = false;
      state.cities.map(city => {
        if (city.name === payload) bool = true;
      });
      return bool
        ? console.log('oops this city is already added..')
        : state.cities.push({ name: payload });
    },
    removeCity: (state, payload) => {
      var newCities = Object.assign([], state.cities);
      state.cities = newCities.filter(city => {
        return city.name === payload ? false : true;
      });
    }
  },
  actions: {
    addCity: (context, payload) => {
      context.commit('addCity', payload);
    },
    removeCity: (context, payload) => {
      context.commit('removeCity', payload);
    }
  }
});
