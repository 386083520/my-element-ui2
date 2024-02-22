<template>
    <div class="ell-badge">
        <slot></slot>
        <sup
        v-text="value"
        :class="type ? 'ell-badge__content--' + type : null"
        class="ell-badge__content is-fixed ">
            8
        </sup>
    </div>
</template>
<script>
    export default {
        props: {
            value: [Number,String],
            type: {
                type: String,
                validator(val) {
                    return ['primay', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
                }
            }
        }
    }
</script>
<style>
    .ell-badge {
        position: relative;
        display: inline-block;
    }
    .ell-badge__content {
        background-color: #F56C6C;
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
    .ell-badge__content--primary {
        background-color: #409EFF;
    }
    .ell-badge__content--warning {
        background-color: #E6A23C;
    }
    .ell-badge__content--info {
        background-color: #909399;
    }
    .ell-badge__content--success {
        background-color: #67C23A;
    }
</style>