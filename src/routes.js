import home from './components/Home.vue';
import cities from './components/Cities.vue';
import city from './components/City.vue';

export default [
  { path: '/home', component: home },
  { path: '/cities', component: cities },
  { path: '/cities/:name', component: city }
];
