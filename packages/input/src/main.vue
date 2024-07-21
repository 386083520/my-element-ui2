<template>
    <div :class="[
        'ell-input',
        {
          'is-disabled': inputDisabled
        }
    ]">
      <input
          ref="input"
          class="ell-input__inner"
          v-bind="$attrs"
          :disabled="inputDisabled"
          @input="handleInput"
      />
      <span class="ell-input__suffix">
        <span class="ell-input__suffix-inner">
          <i
              v-if="showClear"
              class="el-icon-circle-close ell-input__icon ell-input__clear"
              @click="clear"
          ></i>
        </span>
      </span>
    </div>
</template>
<script>
    export default {
        name: 'EllInput',
      props: {
          disabled: Boolean,
          clearable: {
              type: Boolean,
              default: false
          },
          value: [String, Number]
      },
      computed: {
          inputDisabled() {
            return this.disabled
          },
        showClear() {
            return this.clearable && this.nativeInputValue
        },
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '': String(this.value)
        }
      },
      methods: {
        handleInput(event) {
          this.$emit('input', event.target.value)
        },
        clear() {
          this.$emit('input', '')
        },
        setNativeInputValue() {
          const input = this.$refs.input
          if(!input) return
          input.value = this.nativeInputValue
        }
      },
      watch: {
        nativeInputValue() {
          this.setNativeInputValue()
        }
      }
    }
</script>
