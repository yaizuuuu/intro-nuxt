<template>
  <div>
    <nuxt-link to="/hello?query_string=test">Query String</nuxt-link>

    <h1 class="red">Good Morning {{ goodMorning.project }}!</h1>
    <!-- asyncDataを経由してセットされたdataオブジェクトにアクセスしている -->
    <h1 class="red">Hello {{ hello.name }}!</h1>

    <ul>
      <li v-for="prefix in hello.prefixes">{{ prefix.ip_prefix }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodMorning: {
        project: 'Nuxt.js',
      },
      hello: {
        name: 'World',
        prefixes: [],
      },
    }
  },
  asyncData (context) {
    console.log(context)
    return context.$axios.$get(`https://ip-ranges.amazonaws.com/ip-ranges.jsonnnnnnn`)
      .then((res) => {
        console.log(res.prefixes)
        return {
          hello: {
            name: 'World',
            prefixes: res.prefixes,
          },
        }
      })
      .catch((e) => {
        // this.errorに値を渡せる
        // ユースケースとしてはerror.vueで表示に使う
        context.error({ statusCode: 400, message: 'ページが見つかりません' })
      })

    // https://ja.nuxtjs.org/api/
    // コンポーネントをロードする前に毎回呼び出されます
    // 名前の通り非同期にすることができます
    // また、返されたオブジェクトはデータオブジェクトとマージされます

    // **重要**
    // **asyncData メソッド内で、コンポーネントのインスタンスに this を経由してアクセスしてはいけません
    // なぜなら asyncData メソッドはコンポーネントが インスタンス化される前に 呼び出されるためです**
    // this.$routeなどは使えない!!

    // **重要**
    // asyncData はコンポーネント(**ページコンポーネントに限ります**)がロードされる前に毎回呼び出されます
    // サーバーサイドレンダリングや、ユーザーがページを遷移する前にも呼び出されます
    // そしてこのメソッドは第一引数として context（オブジェクト）を受け取り、
    // context を使ってデータを取得してコンポーネントのデータを返します
  },
  fetch (context) {
    console.log(context)

    // https://ja.nuxtjs.org/api/pages-fetch
    // fetch メソッドは、ページがレンダリングされる前に、データをストアに入れるために使われます
    // コンポーネントのデータをセットしないという点を除いては asyncData メソッドとよく似ています
    // Vuexを使う場合はfetchを使うのがよいか??

    // fetch メソッドが設定されている場合、コンポーネント(ページコンポーネントに限ります)がロードされる前に毎回呼び出されます
    // サーバサイドでは一度だけ呼び出され(Nuxt アプリケーションへの最初のリクエスト時)
    // クライアントサイドでは他のルートへ移動したときに呼び出されます

    // fetch メソッドは第一引数として context オブジェクトを受け取るので、
    // データを取得し、取得したデータをストアに入れることができます
    // fetch メソッドを非同期にするためには Promise を返却してください
    // そうすれば nuxt.js はコンポーネントがレンダリングされる前に promise が解決されるまで待機します。
  },
  head () {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: 'My custom description' },
      ],
    }
  },
  // layoutsを選択
  layout: 'blog',
  // loadingコンポーネントを表示するかどうか
  loading: true,
  // 以下の場合だと`<transition name="another"></transition>`と同義
  // https://ja.nuxtjs.org/api/pages-transition
  // その他様々なプロパティを設定してtransitionを制御できる
  transition: 'another',
  // 別ページに移動する際にトップまでスクロールする
  scrollToTop: true,
  validate ({ params, query, store }) {
    return true // params バリデーションを通過したとき
    // return false // Nuxt.js がルートをレンダリングするのを中止して、エラーページを表示させる
  },
  // asyncにも対応できる
  // async validate({ params, query, store }) {
  //   // await の処理
  //   return true // params バリデーションを通過したとき
  // }
  // middleware () {
  //
  // },
  // trueや文字列の場合, 全てのコンポーネントメソッド(asyncData, fetch, validate, layout, ...)が呼ばれる
  // watchQuery: ['page']
  // watchQuery (newQuery, oldQuery) {
  //   // 古いクエリストリング{=getパラメータ}に `bar` が含まれ、新しいクエリストリングに `foo` が含まれている場合のみ、コンポーネントメソッドを実行します
  //   return newQuery.foo && oldQuery.bar
  // },
}
</script>

<style>
.red {
  color: red;
}
</style>
