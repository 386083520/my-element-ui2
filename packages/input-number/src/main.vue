<template>
    <div class="ell-input-number">
        <span
            class="ell-input-number__decrease"
            @click="descrease"
        >
            <i class="el-icon-minus"></i>
        </span>
        <span
            class="ell-input-number__increase"
            @click="increase"
        >
            <i class="el-icon-plus"></i>
        </span>
        <ell-input
            :value="displayValue"
            @input="handleInput"
            @change="handleInputChange"
        />
    </div>
</template>
<script>
    export default {
        name: 'EllInputNumber',
        props: {
            value: {},
        },
        data() {
            return {
                currentValue: 0,
                userInput: null
            }
        },
        methods: {
            handleInput(val) {
                console.log(val)
                this.userInput = val
                // this.$emit('input', val)
            },
            handleInputChange(value) {
                const newVal = Number(value)
                console.log('change', newVal)
                if(!isNaN(newVal)) {
                    this.setCurrentValue(newVal)
                }
                this.userInput = null
            },
            setCurrentValue(newVal) {
                this.currentValue = newVal
                this.$emit('input', newVal)
            },
            increase() {
                const value = this.value || 0
                this.setCurrentValue(value + 1)
            },
            descrease() {
                const value = this.value || 0
                this.setCurrentValue(value - 1)
            }
        },
        computed: {
            displayValue() {
                if(this.userInput !== null) {
                    return this.userInput
                }
                return this.currentValue
            }
        }
    }
</script>
