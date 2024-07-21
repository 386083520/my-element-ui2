<template>
    <div :class="[
        'ell-input',
        {
          'is-disabled': inputDisabled,
          'ell-input--suffix': showPassword || clearable
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
        <span class="ell-input__suffix">
        <span class="ell-input__suffix-inner">
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
        }
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
