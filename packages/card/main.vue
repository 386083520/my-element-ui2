<template>
    <div class="ell-card">
        <div class="ell-card__header" v-if="$slots.header || header">
            <slot name="header">{{header}}</slot>
        </div>
        <div class="ell-card__body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            header: ""
        }
    }
</script>
<style>
    .ell-card {
        border: 1px solid #EBEEF5;
    }
    .ell-card__header {
        padding: 18px 20px;
        border-bottom: 1px solid #EBEEF5;
    }
    .ell-card__body {
        padding: 20px;
    }
</style>