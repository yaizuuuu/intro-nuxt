export default function SimpleModule (moduleOptions) {
  // https://ja.nuxtjs.org/guide/modules
  // ここにあなたのコードを書く
  // console.log(moduleOptions)
  // console.log(this.options)
  // console.log(this.nuxt)
  // console.log(this)
}


// import path from 'path'
//
// export default function nuxtBootstrapVue (moduleOptions) {
//   // `plugin.js` テンプレートを登録する
//   // this.addPlugin()で`nuxt.config.js`以外でもカスタムのJSを登録できる
//   this.addPlugin(path.resolve(__dirname, 'plugin.js'))
// }



// ```plugin.js
// lodash Templateを使用できる
// Google Analytics UA をセットする
// ga('create', '<%= options.ua %>', 'auto')
//
// <% if (options.debug) { %>
// // 開発時のみのコード
// <% } %>
// ```

// ```module.js
// import path from 'path'
//
// export default function nuxtBootstrapVue (moduleOptions) {
//   // `plugin.js` テンプレートを登録する
//   this.addPlugin({
//     src: path.resolve(__dirname, 'plugin.js'),
//     // lodash Templateに当て込むoption
//     options: {
//       // Nuxt はプラグインをプロジェクトにコピーする際に `options.ua` を `123` に置き換える
//       ua: 123,
//
//       // 開発時のみ有効な部分であり、プロダクションビルド時にはプラグインのコードから取り除かれる
//       debug: this.options.dev
//     }
//   })
// }
// ```



// export default function (moduleOptions) {
//   if (moduleOptions.fontAwesome !== false) {
//     // Font Awesome を追加する
//     // this.optionsにはnuxt.config.jsに該当するため, 設定を変更をできる
//     this.options.css.push('font-awesome/css/font-awesome.css')
//   }
// }



// 任意のタイミングで処理を実行できる
// export default function myModule () {
//   this.nuxt.hook('modules:done', (moduleContainer) => {
//     // 全てのモジュールのロードが完了したときに呼ばれます
//   })
//
//   this.nuxt.hook('render:before', (renderer) => {
//     // renderer が作成された後に呼ばれます
//   })
//
//   this.nuxt.hook('build:compile', async ({ name, compiler }) => {
//     // コンパイラ (デフォルト: webpack) が始まる前に呼ばれます
//   })
//
//   this.nuxt.hook('generate:before', async (generator) => {
//     // Nuxt が pages を generate する前に呼ばれます
//   })
// }
