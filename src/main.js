import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
});
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
