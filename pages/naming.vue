<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>
    <h1>direction</h1>

    <nuxt-link to="/naming/left">Left</nuxt-link>
    <nuxt-link to="/naming/right">Right</nuxt-link>
    <nuxt-link to="/transition">Transition</nuxt-link>

    <hr>

    <!-- 子コンポーネント -->
    <!-- naming配下のパスにアクセスした場合に表示 -->
    <NuxtChild/>
    <NuxtChild name="direction"/>
  </div>
</template>

<script>
export default {
  name: 'Naming',
}
</script>
