<template>
    <a :class="[
        'ell-link',
        type? `ell-link--${type}`: '',
        underline && 'is-underline',
        disabled && 'is-disabled'
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
        },
        disabled: Boolean
      }
    }
</script>
