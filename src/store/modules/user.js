import {
    getToken,
    setToken,
    removeToken
} from '@/utils/caches'
import { resetRouter } from '../../router'

const state = {
    token: getToken(),
    name: '',
    roles: []
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}
const actions = {
    login({ commit }, role) {
        return new Promise(resolve => {
            commit('SET_TOKEN', role)
            commit('SET_ROLES', role.split(','))
            setToken(role)
            resolve(role)
        })
    },
    getInfo({
        commit,
        state
    }) {
        return new Promise((resolve) => {
            // const token = state.token
            // TODO 根据当前token获取用户信息
            // 若在登录时已返回用户信息则无需此TODO
            commit('SET_ROLES', state.roles)
            resolve({
                roles: state.roles
            })
        })
    },
    logout({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resetRouter()
            resolve()
        })
    },
    resetToken({
        commit
    }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}