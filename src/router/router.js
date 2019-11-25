import Blog from '../components/front/Blog';
import ArticleList from '../components/front/ArticleList';
import ArticleDetail from '../components/front/ArticleDetail';
import BaseCard from '../components/front/base/BaseCard';
import Management from '../components/management/Management';
import BlogEdit from '../components/management/BlogEdit';
import MenuManagement from '../components/management/MenuManagement';
import BlogManagement from '../components/management/BlogManagement';
import {isLogin} from '../common/request';

const routers = [

    {
        path: '/',
        redirect: '/blog' // 访问 ‘/’ 重定向至 ‘/blog'

    }, {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        children: [
            {
                path: '/blog/article-list/:menuId',
                name: 'ArticleList',
                component: ArticleList,
                props: true
            }, {
                path: '/blog/article-detail/:menuId/:blogId',
                name: 'ArticleDetail',
                component: ArticleDetail,
                props: true
            }, {
                path: '/blog/personal-profile',
                name: 'BaseCard',
                component: BaseCard
            }

        ],
        redirect: '/blog/personal-profile'//如果直接访问 /blog 会重定向到 /blog/personal-profile
    }, {
        path: '/management',
        name: 'Management',
        component: Management,
        children: [
            {
                path: '/management/blog/add-blog',
                name: 'BlogEdit',
                component: BlogEdit,
                props: true
            },{
                path: '/management/blog/menu',
                name: 'MenuManagement',
                component: MenuManagement,
            },{
                path: '/management/blog',
                name: 'BlogManagement',
                component: BlogManagement,
            }
        ],
        redirect: '/management/blog/add-blog',//如果直接访问 /blog 会重定向到 /blog/personal-profile
        beforeEnter: (to, from, next) => {
            // '/management' 全局路由前置守卫，如果没有登陆则重定向至首页
            if(!isLogin()){
                next({path: '/blog/personal-profile'});
            }
            next();

        }
    }


];

export default routers;

