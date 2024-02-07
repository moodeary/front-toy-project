import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const user = ref({})
  const isLoggedIn = ref(false)

  const setUser = (userValue) => {
    if (userValue) {
      user.value = userValue
      isLoggedIn.value = true
    }
  }

  const logout = () => {
    user.value = {}
    isLoggedIn.value = false
  }

  const getisLoggedIn = () => {
    return isLoggedIn.value
  }

  return { user, isLoggedIn, setUser, logout, getisLoggedIn }
})
