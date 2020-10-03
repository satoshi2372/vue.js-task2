import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//vueでfortawesomeを使う場合
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faAddressCard,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faAngleRight, faAddressCard, faChalkboardTeacher);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//ここまで
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
