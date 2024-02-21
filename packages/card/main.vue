<template>
    <div class="ell-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
        <div class="ell-card__header" v-if="$slots.header || header">
            <slot name="header">{{header}}</slot>
        </div>
        <div class="ell-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            header: "",
            shadow: {
                type: String
            },
            bodyStyle: {}
        }
    }
</script>
<style>
    .ell-card {
        border: 1px solid #EBEEF5;
    }
    .ell-card.is-always-shadow,
    .ell-card.is-hover-shadow:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    }
    .ell-card__header {
        padding: 18px 20px;
        border-bottom: 1px solid #EBEEF5;
    }
    .ell-card__body {
        padding: 20px;
    }
</style>