<template>
    <label class="ell-radio">
        <span class="ell-radio__input">
            <span class="ell-radio__inner"></span>
            <input type="radio"/>
        </span>
        <span class="ell-radio__label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'EllRadio'
    }
</script>
