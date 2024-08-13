<template>
    <div class="ell-radio-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'EllRadioGroup',
        props: {
            value: {}
        }
    }
</script>
