export default ({ app }, inject) => {
  // context.app オブジェクトへ関数を直接セットします
  // app.myInjectedFunction2 = string => console.log('Okay, another function', string)
  inject('myInjectedFunction2', string => console.log('That was easy!', string))
}
