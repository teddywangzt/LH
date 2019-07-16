import Vue from "vue";
import VModal from "vue-js-modal";
import VueLazyload from "vue-lazyload";
import BackToTop from "vue-backtotop";
// import VueCarousel from "vue-carousel";

import App from "./App.vue";
// import router from "./router";
import i18n from "./i18n";
import "@/assets/style.css";
import VueCarousel from "./components/carousel";

Vue.config.productionTip = false;

Vue.use(VueLazyload);
Vue.use(VModal);
Vue.use(BackToTop);
Vue.use(VueCarousel);

new Vue({
  // router,
  i18n,
  render: h => h(App)
}).$mount("#app");
