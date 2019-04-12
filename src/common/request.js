import axios from 'axios';

axios.defaults.baseURL = '/';

/**
 * 获取菜单
 * @returns {AxiosPromise<any>}
 */
function getMenu(){
    return axios.get("/menu");
}

export{getMenu}