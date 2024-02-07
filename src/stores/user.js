import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const user = ref({})

  const setUser = (userValue) => {
    console.log('userValue', userValue)
    user.value = userValue
  }

  const loginUser = () => {
    return user.value
  }

  const logout = () => {
    user.value = {}
  }

  return { user, setUser, loginUser, logout }
})
