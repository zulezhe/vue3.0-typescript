import { Module } from 'vuex';
import { login, getUserInfo, logout } from '@/api/user';
import { createStorage } from '@/utils/storage';
const storage = createStorage();
const state = {
  token: '',
  name: '',
  welcome: '',
  avatar: '',
  roles: [],
  info: null,
};

type StateType = typeof state;

const user: Module<StateType, any> = {
  namespaced: true,
  state,
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name;
      state.welcome = welcome;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((response: any) => {
            const { result, code } = response;
            if (code == 0) {
              console.log(result.token);
              commit('SET_TOKEN', result.token);
              // todo
              commit('SET_INFO', result);
            }
            resolve(response);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((response: any) => {
            const result = response.result;

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role;
              role.permissions = result.role.permissions;
              role.permissions.map((per: { actionEntitySet: any[] | null; actionList: any }) => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                  const action = per.actionEntitySet.map((action: { action: any }) => {
                    return action.action;
                  });
                  per.actionList = action;
                }
              });
              role.permissionList = role.permissions.map((permission: { permissionId: any }) => {
                return permission.permissionId;
              });
              commit('SET_ROLES', result.role);
              commit('SET_INFO', result);
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'));
            }

            // commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar);

            resolve(response);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // 登出
    Logout({ commit }) {
      return new Promise<void>((resolve, reject) => {
        commit('SET_ROLES', '');
        commit('SET_INFO', '');
        logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            storage.remove(state.token);
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default user;
