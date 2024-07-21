<template>
    <div :class="[
        'ell-input',
        {
          'is-disabled': inputDisabled,
          'ell-input--suffix': showPassword || clearable,
          'ell-input--prefix': $slots.prefix || prefixIcon
        }
    ]">
        <input
            ref="input"
            class="ell-input__inner"
            v-bind="$attrs"
            :disabled="inputDisabled"
            @input="handleInput"
            :type="showPassword ? (passwordVisible ? 'text': 'password'): 'text'"
        />
        <span class="ell-input__prefix">
            <slot name="prefix"></slot>
            <i v-if="prefixIcon" :class="prefixIcon" class="ell-input__icon"></i>
        </span>
        <span class="ell-input__suffix">
            <span class="ell-input__suffix-inner">
              <template>
                  <slot name="suffix"></slot>
                  <i v-if="suffixIcon" :class="suffixIcon" class="ell-input__icon"></i>
              </template>
              <i
                  v-if="showClear"
                  class="el-icon-circle-close ell-input__icon ell-input__clear"
                  @click="clear"
              ></i>
            <i
                v-if="showPwdVisible"
                class="el-icon-view ell-input__icon ell-input__clear"
                @click="handlePasswordVisible"
            >
            </i>
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
        value: [String, Number],
        showPassword: {
            type: Boolean,
            default: false
        },
        suffixIcon: String,
        prefixIcon: String
    },
    data() {
        return {
            passwordVisible: false
        }
    },
    computed: {
        inputDisabled() {
            return this.disabled
        },
        showClear() {
            return this.clearable && this.nativeInputValue
        },
        showPwdVisible() {
            return this.showPassword
        },
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value)
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
            if (!input) return
            input.value = this.nativeInputValue
        },
        handlePasswordVisible() {
            this.passwordVisible = !this.passwordVisible
        }
    },
    watch: {
        nativeInputValue() {
            this.setNativeInputValue()
        }
    }
}
</script>
