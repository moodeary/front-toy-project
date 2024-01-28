import { ref } from 'vue'
import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', () => {
  const count = ref(10)

  const decrement = () => {
    count.value--
  }

  const increment = () => {
    count.value++
  }

  return { count, decrement, increment }
})
