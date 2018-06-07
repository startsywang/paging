import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
    list:[]
}
var mutations = {
   addList(state,data){
       state.list=data;
   }
}
var actions = {
    incMutationsCount (context) {
      context.commit('addList')
      /* 执行mutations里边的inccount方法，以此来改变state里边的数据 */
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
});
