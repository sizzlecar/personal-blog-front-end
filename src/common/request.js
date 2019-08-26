import axios from 'axios';

axios.defaults.baseURL = '/';

/**
 * 获取菜单
 * @returns {AxiosPromise<any>}
 */
function getMenu(){
    return axios.get("/blog/blog-menu/list");
}


/**
 * 获取某一菜单下的博客
 * @returns {AxiosPromise<any>}
 */
function getBlogList(menuId){
    return axios.get("/blog/list/" + menuId);
}


/**
 * 获取博客详情
 * @returns {AxiosPromise<any>}
 */
function getBlogDetail(menuId, blogId){
    return axios.get("/blog/detail/" + menuId + "/" + blogId);
}


export{getMenu, getBlogList, getBlogDetail}
