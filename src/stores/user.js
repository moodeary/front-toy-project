import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const user = reactive({})
  const isLogIn = ref(false)

  const setUser = (userValue) => {
    if (userValue) {
      user.value = userValue
      isLogIn.value = true
    }
  }

  const logout = () => {
    user.value = reactive({})
    isLogIn.value = false
  }

  const getisLogIn = () => {
    return isLogIn.value
  }

  return { setUser, logout, getisLogIn }
})
