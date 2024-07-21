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
      <span class="ell-input__suffix">
        <span class="ell-input__suffix-inner">
          <i class="el-icon-circle-close ell-input__icon ell-input__clear"></i>
        </span>
      </span>
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
