let action = null
const Sticky = {
    install(Vue) {
        Vue.directive('sticky', {
            inserted(el, binding) {
                const params = binding.value || {}
                const top = params.top || 0
                const index = params.index || 1000
                const style = el.style
                style.position = '-webkit-sticky'
                style.position = 'sticky'

                const height = el.getBoundingClientRect().height
                const width = el.getBoundingClientRect().width
                style.cssText = `top:${top}px;z-index:${index}px;`

                const parent = el.parentNode || document.documentElement
                const placeholder = document.createElement('div')
                placeholder.style.display = 'none'
                placeholder.style.height = `${height}px`
                placeholder.style.width = `${width}px`
                parent.insertBefore(placeholder, el)

                let active = false

                const getScroll = (target, top) => {
                    const prop = top ? 'pageYOffset' : 'pageXOffset'
                    const method = top ? 'scrollTop' : 'scrollLeft'
                    let ret = target[prop]
                    if (typeof ret !== 'number') {
                        ret = window.document.documentElement[method]
                    }
                    return ret
                }

                const sticky = () => {
                    if (active) {
                        return
                    }
                    if (!style.height) {
                        style.height = `${el.offsetHeight}px`
                    }
                    style.width = `${width}px`
                    style.position = 'fixed'
                    placeholder.style.display = 'inline-block'

                    active = true
                }

                const reset = () => {
                    if (!active) {
                        return
                    }
                    style.position = ''
                    placeholder.style.display = 'none'
                    active = false
                }

                const check = () => {
                    const scrollTop = getScroll(window, true)
                    const offsetTop = el.getBoundingClientRect().top
                    console.log(9527, scrollTop, offsetTop)
                    if (scrollTop > offsetTop) {
                        sticky()
                    } else {
                        if (scrollTop < height + top) {
                            reset()
                        }
                    }
                }

                const action = () => {
                    check()
                }

                window.addEventListener('scroll', action)
            },
            unbind() {
                window.removeEventListener('scroll', action)
            }
        })
    }
}
export default Sticky