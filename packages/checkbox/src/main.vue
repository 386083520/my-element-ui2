<template>
    <label class="ell-checkbox">
        <span class="ell-checkbox__input">
            <span class="ell-checkout__inner"></span>
            <input
                type="checkbox"
            />
        </span>
        <span class="ell-checkbox__label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'EllCheckbox'
    }
</script>
