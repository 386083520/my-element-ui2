export default {
    methods: {
        dispatch(componentName, eventName, params) {
            var parent = this.$parent
            var name = parent.$options.name
            if(parent && name === componentName) {
                parent.$emit.apply(parent, [eventName].concat(params))
            }
        }
    }
}
