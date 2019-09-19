// プラグインを store/index.js ファイルに置くことで、ストア（モジュールモード）に追加できます:
// import myPlugin from 'myPlugin'
// export const plugins = [ myPlugin ]


// stateは常にfunctionで書く
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state){
    state.counter++
  }
}
