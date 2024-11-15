<template>
    <div class="ell-rate">
        <span v-for="(item,key) in 5" :key="key">
            <i>{{item}}</i>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'EllRate'
    }
</script>
