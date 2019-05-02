import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vueEcharts from 'echarts'
import VueRouter from 'vue-router'
import routers from './router/router'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(vueEcharts);
const router = new VueRouter({
    mode: 'history',
    routes: routers
});
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
