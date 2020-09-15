import store from '@/store'
export default {
    inserted(el, binding) {
        const { value } = binding
        const roles = store.getters && store.getters.roles
        if (value && value instanceof Array && value.length > 0) {
            const permissions = value
            const has = roles.some(role => {
                return permissions.includes(role)
            })
            if (!has) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`need roles! like v-permission="['admin']"`)
        }
    }
}