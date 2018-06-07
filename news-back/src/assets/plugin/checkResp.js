const checkResp = function (resp) {
    if (resp && (resp.code === 0  || resp.code === 1)) {
        return resp.data;
    }
    return Promise.reject(resp);
}

export default {
    install(Vue) {
        Vue.checkResp = checkResp;
        Object.defineProperty(Vue.prototype, '$checkResp', {value: Vue.checkResp})
    }
}