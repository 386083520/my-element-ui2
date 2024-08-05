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
        />
    </div>
</template>
<script>
    export default {
        name: 'EllInputNumber',
        props: {
            value: {}
        }
    }
</script>
