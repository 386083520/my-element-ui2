<template>
    <div class="ell-rate">
        <span
            v-for="(item,key) in 5"
            :key="key"
            class="ell-rate__item"
            :style="{ cursor:  'pointer' }"
            @mousemove="setCurrentValue(item)"
            @mouseleave="resetCurrentValue(item)"
            @click="selectValue(item)"
        >
            <i
                :class="[classes[item - 1], {'hover': hoverIndex === item}]"
                class="ell-rate__icon"
                :style="getIconStyle(item)"
            >
                <i
                    v-if="showDecimalIcon(item)"
                    :class="decimalIconClass"
                    :style="decimalStyle"
                    class="ell-rate__decimal"
                >

                </i>
            </i>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'EllRate',
        props: {
            value: {
                type: Number,
                default: 0
            },
            allowHalf:  {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentValue: this.value,
                hoverIndex: 0
            }
        },
        computed: {
            classes() {
                let result = []
                let i = 0;
                let threshold = this.currentValue
                if(this.allowHalf && this.currentValue !== Math.floor(this.currentValue))  {
                    threshold--
                }
                for (; i < threshold; i++) {
                    result.push('el-icon-star-on')
                }
                for (; i < 5; i++) {
                    result.push('el-icon-star-off')
                }
                return result
            },
            decimalIconClass() {
                return 'el-icon-star-on'
            },
            decimalStyle() {
                return {
                    color: '#F7BA2A',
                    width: '50%'
                }
            }
        },
        methods: {
            setCurrentValue(value) {
                this.currentValue = value
                this.hoverIndex = value
            },
            resetCurrentValue() {
                this.currentValue = this.value
                this.hoverIndex = 0
            },
            getIconStyle(item) {
                return {
                    color: item <= this.currentValue ? '#F7BA2A' : '#C6D1DE'
                }
            },
            selectValue(value) {
                this.$emit('input', value)
            },
            showDecimalIcon(item) {
                return item == 2
            }
        }
    }
</script>
