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
        name: 'EllCard',
        props: {
            header: "",
            shadow: {
                type: String
            },
            bodyStyle: {}
        }
    }
</script>
