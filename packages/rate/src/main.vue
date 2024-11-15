<template>
    <div class="ell-rate">
        <span v-for="(item,key) in 5" :key="key" class="ell-rate__item">
            <i
                :class="classes[item - 1]"
                class="ell-rate__icon"
            >

            </i>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'EllRate',
        computed: {
            classes() {
                let result = []
                for (let i = 0; i < 5; i++) {
                    result.push('el-icon-star-off')
                }
                return result
            }
        }
    }
</script>
