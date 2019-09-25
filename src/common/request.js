import axios from 'axios';

axios.defaults.baseURL = '/';



function setToken() {
    const token = window.localStorage.getItem("token");
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    }
}

function clearToken() {
    window.localStorage.removeItem("token");
    axios.defaults.headers.common['Authorization'] = null;
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
function getBlogList(menuId){
    return axios.get("/blog/list/" + menuId);
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




export{getMenu, getBlogList, getBlogDetail, login,setToken,clearToken}
