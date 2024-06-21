<template>
    <a :class="[
        'ell-link',
        type? `ell-link--${type}`: ''
    ]" href="www.baidu.com">
      <slot></slot>
    </a>
</template>
<script>
    export default {
        name: 'EllLink',
      props: {
          type: {
            type: String,
            default: 'default'
          }
      }
    }
</script>
