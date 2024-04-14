<template>
    <div :class="span? 'ell-col-' + span: ''">
      <slot></slot>
    </div>
</template>
<script>
    export default {
      name: 'EllCol',
      props: {
          span: {
            type: Number,
            default: 24
          }
      }
    }
</script>
