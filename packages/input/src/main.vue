<template>
    <div :class="[
        'ell-input',
        {
          'is-disabled': inputDisabled
        }
    ]">
      <input
          class="ell-input__inner"
          v-bind="$attrs"
          :disabled="inputDisabled"
      />
    </div>
</template>
<script>
    export default {
        name: 'EllInput',
      props: {
          disabled: Boolean
      },
      computed: {
          inputDisabled() {
            return this.disabled
          }
      }
    }
</script>
