<template>
  <nuxt-link to="/">Home page</nuxt-link>
</template>

<script>
export default {
  // ページ単位でmiddlewareを適応する場合
  middleware: 'auth',
}
</script>
