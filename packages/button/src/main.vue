<template>
    <button class="ell-button" :class="[
        type? 'ell-button--' + type: '',
        {
          'is-plain': plain
        }
    ]">
      <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'EllButton',
      props: {
          type: {
            type: String,
            default: 'default'
          },
          plain: Boolean
      }
    }
</script>
