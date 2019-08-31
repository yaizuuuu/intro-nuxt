<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>
    <!-- 従来どおりにdataからデータの値を表示させる -->
    <p>{{ test }}</p>

    <!-- 従来どおりにcomputedからデータの値を表示させる -->
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      test: 'test',
    }
  },
  computed: {
    id () {
      // 動的なルートのパラメータを取得
      console.log(this.$route)
      return this.$route.params.id
    },
  },
}
</script>
