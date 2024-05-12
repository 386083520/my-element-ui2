<template>
    <button class="ell-button" :class="[
        type? 'ell-button--' + type: '',
        {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle
        }
    ]">
      <i :class="icon" v-if="icon"></i>
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
          plain: Boolean,
          round: Boolean,
          circle: Boolean,
          icon: {
            type: String,
            default: ''
          }
      }
    }
</script>
