import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        //设置属性
        menuItems: {},
        currentUser: null,
        isLogin: false
    },
    getters: {
        //获取属性
        getMenuItems: state => state.menuItems,
        currentUser: state => state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations: {
        //改变属性
        setMenuItems(state, data) {
            state.menuItems = data;
        },
        removeMenuItems(state, data) {
            state.menuItems.forEach((item, index) => {
                if (item == data) {
                    state.menuItems.splice(index, 1);
                }
            });
        },
        pushToMenuItems(state, data) {
            state.menuItems.push(data);
        },
        userStatus(state, user) {
            if (user) {
                state.currentUser = user;
                state.isLogin = true;
            } else {
                state.currentUser = null;
                state.isLogin = false;
            }

        }
    },
    actions: {
        //应用mutations
    }
});