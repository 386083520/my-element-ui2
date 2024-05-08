<template>
    <button class="ell-button" :class="type? 'ell-button--' + type: ''">
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
          }
      }
    }
</script>
