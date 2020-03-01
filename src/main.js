import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$scrollTop = div => {
  var element = document.getElementById(div);
  var top = element.offsetTop;
  window.scrollTo(0, top);
};

new Vue({
  render: h => h(App)
}).$mount("#app");
