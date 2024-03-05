<template>
    <div class="ell-badge">
        <slot></slot>
        <sup
        v-text="content"
        v-show="!hidden && (content || isDot)"
        :class="[
        type ? 'ell-badge__content--' + type : null,
        {
            'is-fixed': $slots.default,
            'is-dot': isDot
        }
        ]"
        class="ell-badge__content">
        </sup>
    </div>
</template>
<script>
    export default {
        name: 'EllBadge',
        props: {
            value: [Number,String],
            max: Number,
            isDot: Boolean,
            hidden: Boolean,
            type: {
                type: String,
                validator(val) {
                    return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
                }
            }
        },
        computed: {
            content() {
                if(this.isDot)  return
                const value = this.value
                const max = this.max
                if(typeof value === 'number' && max === 'number') {
                    return max < value ? `${max}+` : value
                }
                return value
            }
        }
    }
</script>
