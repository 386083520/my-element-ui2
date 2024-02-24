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
            8
        </sup>
    </div>
</template>
<script>
    export default {
        props: {
            value: [Number,String],
            max: Number,
            isDot: Boolean,
            hidden: Boolean,
            type: {
                type: String,
                validator(val) {
                    return ['primay', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
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
<style lang="scss">
    @import "../theme-chalk/src/index.scss";
    @include b(badge) {
        position: relative;
        display: inline-block;
    }
    .ell-badge__content {
        background-color: $--color-danger;
        padding: 0 6px;
        border-radius: 10px;
        font-size: 12px;
        color: #fff;
        height: 18px;
        display: inline-block;
        line-height: 18px;
        border: 1px solid #fff;
    }
    .ell-badge__content.is-fixed {
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
    }
    .ell-badge__content.is-dot {
        height: 8px;
        width: 8px;
        padding: 0;
        right: 5px;
    }
    .ell-badge__content--primary {
        background-color: $--color-primary;
    }
    .ell-badge__content--warning {
        background-color: $--color-warning;
    }
    .ell-badge__content--info {
        background-color: $--color-info;
    }
    .ell-badge__content--success {
        background-color: $--color-success;
    }
</style>