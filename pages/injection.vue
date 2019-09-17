<template>
  <injection></injection>
</template>

<script>
import Injection from '~/components/Injection'

export default {
  components: {
    Injection,
  },
  // mounted () {
  //   this.$myInjectedFunction('test2')
  // },
  // asyncData (context) {
  //   context.app.myInjectedFunction2('test3')
  // },
  mounted () {
    this.$myInjectedFunction2('works in mounted')
  },
  asyncData (context) {
    context.app.$myInjectedFunction2('works with context')
  }
}

</script>
