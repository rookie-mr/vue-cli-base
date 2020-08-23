import {
    mount,
    shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Test', () => {
    it('msg test', () => {
        expect(shallowMount(HelloWorld, {
            propsData: {
                msg: 'hello'
            }
        }).find('h1').text()).toBe('hello')
    })
})