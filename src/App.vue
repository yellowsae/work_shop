<template>
  <router-view/>
  <h2>{{ store.state.username }}</h2>
  <h2>{{ store.getters.newName }}</h2>

  <button @click="mutationsFn">changer</button>
</template>

<script>
// 在Vue3 中使用 Vuex
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    // 打印的store, 就是在vue2中 Store实例
    console.log(store)
    // 使用 mutations 方法
    const mutationsFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }
    return {
      store,
      mutationsFn
    }
  }
}
</script>
