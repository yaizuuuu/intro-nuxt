<template>
  <div>
    <h2>{{ direction }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Direction',
  computed: {
    direction () {
      return this.$route.params.direction
    }
  }
}
</script>
