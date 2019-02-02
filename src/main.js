import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vueEcharts from 'echarts'
import Route from 'vue-router'
import router from './router/router'

Vue.config.productionTip = false;
Vue.use(Route);
Vue.use(ElementUI);
Vue.use(vueEcharts);
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
