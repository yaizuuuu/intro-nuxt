<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>
    <!-- 従来どおりにdataからデータの値を表示させる -->
    <p>{{ name }}</p>

    <!-- 従来どおりにcomputedからデータの値を表示させる -->
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Second',
  // ルーティングの検証
  validate ({ params }) {
    // paramsに動的に指定したパスが入る
    console.log('validate: ', params, params.id, /^\d+$/.test(params.id))
    // 数値でなければならない
    return /^\d+$/.test(params.id)
    // 失敗させてみる,
    // return /^\s+$/.test(params.id)
  },

  data () {
    return {
      name: 'Hello World',
    }
  },

  computed: {
    id () {
      // 動的なルートのパラメータを取得
      console.log('route object: ', this.$route)
      return this.$route.params.id
    },
  },
}
</script>
