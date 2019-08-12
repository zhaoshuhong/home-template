/**
 * Created by 19443 on 2019/5/13.
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        expInfo: {
            opId: "",
            orgId: "",
            sessionId: "",
            cityCode:""
        },
      workId:'',
    },
    mutations: {
        setExpInfo(state, expInfo) {
            state.expInfo = expInfo;
        },
      setWorkId(state, setWorkId) {
        state.workId = setWorkId;
      }
    },
    getters: {
        getExpInfo(state) {
            return state.expInfo
        },
      getWorkId(state) {
        return state.workId
      }
    }
});
