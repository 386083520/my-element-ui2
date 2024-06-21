<template>
    <a :class="[
        'ell-link',
        type? `ell-link--${type}`: '',
        underline && 'is-underline'
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
          },
        underline: {
            type: Boolean,
          default: true
        }
      }
    }
</script>
