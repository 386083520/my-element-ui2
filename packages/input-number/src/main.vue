<template>
    <div class="ell-input-number">
        <span class="ell-input-number__decrease">
            <i class="el-icon-minus"></i>
        </span>
        <span class="ell-input-number__increase">
            <i class="el-icon-plus"></i>
        </span>
        <ell-input
            :value="value"
            @input="handleInput"
        />
    </div>
</template>
<script>
    export default {
        name: 'EllInputNumber',
        props: {
            value: {}
        },
        methods: {
            handleInput(val) {
                console.log(val)
                this.$emit('input', val)
            }
        }
    }
</script>
