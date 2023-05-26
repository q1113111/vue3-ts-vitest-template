import { createPinia, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import storeReset from './plugins/storeReset'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment () {
    count.value++
  }

  return { count, doubleCount, increment }
})

const store = createPinia()
store.use(storeReset)

export default store
