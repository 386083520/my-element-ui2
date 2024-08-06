<template>
    <div class="ell-input-number">
        <span
            class="ell-input-number__decrease"
            :class="{'is-disabled': minDisabled}"
            @click="descrease"
        >
            <i class="el-icon-minus"></i>
        </span>
        <span
            class="ell-input-number__increase"
            :class="{'is-disabled': maxDisabled}"
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
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number,
                default: -Infinity
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(value) {
                    console.log('handler')
                    let newVal = Number(value)
                    if(isNaN(newVal)) return
                    if(newVal >= this.max) newVal = this.max
                    if(newVal <= this.min) newVal = this.min
                    this.setCurrentValue(newVal)
                    this.userInput = null
                }
            }
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
            _increase(val) {
                if(typeof val !== 'number') return
                return val + 1
            },
            _descrease(val) {
                if(typeof val !== 'number') return
                return val - 1
            },
            increase() {
                if(this.maxDisabled) return
                const value = this.value || 0
                const newVal = this._increase(value)
                this.setCurrentValue(newVal)
            },
            descrease() {
                if(this.minDisabled) return
                const value = this.value || 0
                this.setCurrentValue(value - 1)
            }
        },
        computed: {
            displayValue() {
                if(this.userInput !== null) {
                    return this.userInput
                }
                console.log('val')
                return this.currentValue
            },
            maxDisabled() {
                return this._increase(this.value) > this.max
            },
            minDisabled() {
                return this._descrease(this.value) < this.min
            }
        }
    }
</script>
