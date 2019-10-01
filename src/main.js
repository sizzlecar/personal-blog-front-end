import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// Vue-cli生成的工程文件的src/main.js
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter);
Vue.use(mavonEditor);
const router = new VueRouter({
    mode: 'history',
    routes: routers
});
new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
