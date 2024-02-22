<template>
    <div class="ell-badge">
        <slot></slot>
        <sup class="ell-badge__content is-fixed">
            8
        </sup>
    </div>
</template>
<style>
    .ell-badge {
        position: relative;
        display: inline-block;
    }
    .ell-badge__content {
        background-color: #F56C6C;
        padding: 0 6px;
        height: 18px;
        line-height: 18px;
        display: inline-block;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        border: 1px solid;
    }
    .ell-badge__content.is-fixed {
        position: absolute;
        top: 0px;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
    }
</style>