import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  /a-/,
];

new Vue({
  render: h => h(App),
}).$mount('#app');
