import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import Popper from 'vue-popperjs';

import './assets/style/app.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-popperjs/dist/vue-popper.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)

new Vue({
  el: '#app',
  render: h => h(App),
});
