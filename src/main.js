import Vue from 'vue'
import App from './App.vue'
window.Vue = require('vue');

Vue.config.productionTip = false


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// new Vue({
//   el: "#app",
//   components: { App },
//   template: `<App :state="state" />`,
//   data() {
//     return {
//       state: {
//         showDone: false,
//         todos: [{
//           text: "refactor Css",
//           done: true
//         },
//         {
//           text: " Secure Docker",
//           done: false
//         }]
//       }
//     };
//   },
//   render: h => h(App),
// })

new Vue({
  el: '#app',
  components: { App },
  data: {

  },
  methods: {

  },
  render: h => h(App),

}).$mount('#app');