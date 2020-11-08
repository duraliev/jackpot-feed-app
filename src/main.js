import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { pots } from './data.json';

library.add(
  faClock,
);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

store.commit('setPots', pots);
