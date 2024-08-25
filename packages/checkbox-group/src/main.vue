<template>
    <div class="ell-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'EllCheckboxGroup',
        props: {
            value: {},
            disabled: Boolean
        }
    }
</script>
