<template>
    <button
        :disabled="disabled"
        class="ell-button"
        @click="handleClick"
        :class="[
        type? 'ell-button--' + type: '',
        size? 'ell-button--' + size: '',
        {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-loading': loading,
          'is-disabled': disabled
        }
    ]">
      <i class="el-icon-loading"  v-if="loading"></i>
      <i :class="icon" v-if="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
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
          },
        loading: Boolean,
        disabled: Boolean,
        size: String
      },
      methods: {
        handleClick(evt) {
          this.$emit('click', evt)
        }
      }
    }
</script>
