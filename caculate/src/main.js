import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import header from './components/header/header.vue'

Vue.use(ElementUI);
Vue.use(header);

new Vue({
  el: '#app',
  render: h => h(App)
});
