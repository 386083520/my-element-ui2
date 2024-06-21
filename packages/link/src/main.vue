<template>
    <a
        @click="handleClick"
        :class="[
        'ell-link',
        type? `ell-link--${type}`: '',
        underline && 'is-underline',
        disabled && 'is-disabled'
    ]"
       :href="disabled? null: href">
      <slot></slot>
    </a>
</template>
<script>
    export default {
        name: 'EllLink',
      props: {
          type: {
            type: String,
            default: 'default'
          },
        underline: {
            type: Boolean,
          default: true
        },
        disabled: Boolean,
        href: String
      },
      methods: {
        handleClick(event) {
          if(!this.disabled) {
            if(!this.href) {
              this.$emit('click', event)
            }
          }
        }
      }
    }
</script>
