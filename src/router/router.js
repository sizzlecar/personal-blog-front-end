import Blog from '@/components/Blog';
import ArticleList from '@/components/ArticleList';
import ArticleDetail from '@/components/ArticleDetail';
import PersonalProfile from '@/components/PersonalProfile';

const routers = [
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        children: [
            {
                path: '/blog/article-list',
                name: 'ArticleList',
                component: ArticleList,
            },{
                path: '/blog/article-detail',
                name: 'ArticleDetail',
                component: ArticleDetail,
            },{
                path: '/blog/personal-profile',
                name: 'PersonalProfile',
                component: PersonalProfile
            }

        ],
        redirect: '/blog/personal-profile'
    }


];

export default routers;

