import Router from 'vue-router'
import Vue from 'vue'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Article from '@/components/list/Article'
Vue.use(Router);
export default new Router({

    routers :[
        {
            path: '/index',
            name: 'Article',
            comment: Article
        },{
            path: '/java/frame/spring',
            name: 'Article',
            comment: Article
        }



    ]

})