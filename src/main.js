import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/router'
// 按需引入ant-vue 组件
import { Button, Card, Dropdown, Form, Icon,
    Layout, List, Select, Row,
    Tree, TreeSelect, Col, Input,
    Menu, Modal, Checkbox, Comment,
    BackTop, Table, message} from 'ant-design-vue';
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
});
Vue.config.productionTip = false;

Vue.prototype.$message = message;
Vue.use(Table);
Vue.use(BackTop);
Vue.use(Comment);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Col);
Vue.use(Input);
Vue.use(Card);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(List);
Vue.use(Select);
Vue.use(Row);
Vue.use(Tree);
Vue.use(TreeSelect);
Vue.use(TreeSelect);
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
