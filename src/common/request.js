import axios from 'axios';
import {getCookie} from './utils'

axios.defaults.baseURL = '/';

function setCsrfToken() {
    const csrfToken = getCookie('csrfToken');
    if(csrfToken) {
        axios.defaults.headers.common['x-csrf-token'] = csrfToken;
    }
}

function setToken() {
    const token = window.localStorage.getItem("token");
    if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
    }
}

function clearToken() {
    window.localStorage.removeItem("token");
    axios.defaults.headers.common['Authorization'] = '';
}

function isLogin() {
    const token = window.localStorage.getItem("token");
    if(token && !axios.defaults.headers.common['Authorization']){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' +  token;
    }
    return !!token;
}

/**
 * 获取菜单
 */
function getMenu(){
    return axios.get("/blog/blog-menu/list");
}


/**
 * 获取某一菜单下的博客
 */
function getBlogList(blog){
    return axios.post("/blog/list", blog);
}


/**
 * 获取博客详情
 */
function getBlogDetail(menuId, blogId){
    return axios.get("/blog/detail/" + menuId + "/" + blogId);
}

/**
 * 登陆
 * @param account
 * @param password
 * @returns {Promise<AxiosResponse<T>>}
 */
function login(form) {
    return axios.post('/blog/user/login', form)
}

function addBlog(blog) {
    return axios.post('/blog/management/blog/add', blog);
}

function managementMenuGetAllMenu() {
    return axios.post('/blog/management/blog-menu/list');
}

function updateMenu(menu) {
    return axios.post('/blog/management/blog-menu/update', menu);
}

function addMenu(menu) {
    return axios.post('/blog/management/blog-menu/add', menu);
}

function deleteMenu(menu) {
    return axios.post('/blog/management/blog-menu/delete', menu);
}






export{getMenu, getBlogList, getBlogDetail, login, setToken, clearToken, isLogin, addBlog,
    managementMenuGetAllMenu, updateMenu, addMenu, deleteMenu, setCsrfToken}
