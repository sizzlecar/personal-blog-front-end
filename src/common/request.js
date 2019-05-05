import axios from 'axios';

axios.defaults.baseURL = '/';

/**
 * 获取菜单
 * @returns {AxiosPromise<any>}
 */
function getMenu(){
    return axios.get("/menu");
}


/**
 * 获取某一菜单下的博客
 * @returns {AxiosPromise<any>}
 */
function getBlogList(menuId){
    return axios.get("/get-blog-list/" + menuId);
}

export{getMenu,getBlogList}