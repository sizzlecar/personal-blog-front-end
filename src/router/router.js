import Router from 'vue-router'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Article from '@/components/list/Article'
export default new Router({

    routers :[
        {
            path: '/index',
            name: 'Index',
            comment: Index,
            children:[
                {
                    path: '/index',
                    name: 'Index',
                    comment: Index,
                }

            ]
        }



    ]

})