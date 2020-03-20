import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-37637.firebaseio.com/';

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
