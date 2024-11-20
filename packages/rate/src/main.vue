<template>
    <div class="ell-rate">
        <span
            v-for="(item,key) in 5"
            :key="key"
            class="ell-rate__item"
            :style="{ cursor:  'pointer' }"
            @mousemove="setCurrentValue(item, $event)"
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
import { hasClass } from "../../../src/utils/dom";

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
                hoverIndex: 0,
                pointerAtLeftHalf: true
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
            setCurrentValue(value, e) {
                if(this.allowHalf) {
                    let target = e.target
                    console.log(target)
                    if(hasClass(target, 'ell-rate__item')) {
                        target = target.querySelector('.ell-rate__icon')
                    }
                    if(hasClass(target, 'ell-rate__decimal')) {
                        target = target.parentNode
                    }
                    this.pointerAtLeftHalf = e.offsetX * 2 <= target.clientWidth
                    this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
                } else {
                    this.currentValue = value
                }
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

                if(this.allowHalf && this.pointerAtLeftHalf) {
                    this.$emit('input', this.currentValue)
                } else {
                    this.$emit('input', value)
                }
            },
            showDecimalIcon(item) {
                let showWhenAllowHalf = this.allowHalf && item > this.currentValue && item-0.5 <= this.currentValue
                return showWhenAllowHalf
            }
        }
    }
</script>
