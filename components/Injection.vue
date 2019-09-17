<template>
  <nuxt-link to="/">Home page</nuxt-link>
</template>

<script>
export default {
  name: 'Injection',
  mounted () {
    this.$myInjectedFunction('test')
  },
}
</script>
