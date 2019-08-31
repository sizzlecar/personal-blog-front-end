import Blog from '../components/Blog';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import BaseCard from '../components/base/BaseCard';

const routers = [

    {
        path: '/',
        redirect: '/blog' // 访问 ‘/’ 重定向至 ‘/blog'

    },{
        path: '/blog',
        name: 'Blog',
        component: Blog,
        children: [
            {
                path: '/blog/article-list/:menuId',
                name: 'ArticleList',
                component: ArticleList,
                props: true
            },{
                path: '/blog/article-detail/:menuId/:blogId',
                name: 'ArticleDetail',
                component: ArticleDetail,
                props: true
            },{
                path: '/blog/personal-profile',
                name: 'BaseCard',
                component: BaseCard,
                props: (route)  => ({
                    initImagePath: route.params.imagePath,
                    initTitle: route.params.title,
                    initDescription: route.params.description
                })
            }

        ],
        redirect: '/blog/personal-profile'//如果直接访问 /blog 会重定向到 /blog/personal-profile
    }


];

export default routers;

