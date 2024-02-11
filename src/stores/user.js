// import { ref } from 'vue'
// import { defineStore } from 'pinia'

// export const userStore = defineStore('user', () => {
//   const user = ref({})
//   const isLogIn = ref(false)

//   const setUser = (userValue) => {
//     console.log(userValue)
//     if (userValue) {
//       user.value = userValue
//       isLogIn.value = true
//     } else {
//       isLogIn.value = false
//       user.value = {}
//     }
//   }

//   const logout = () => {
//     user.value = {}
//     isLogIn.value = false
//   }

//   const getisLogIn = () => {
//     return isLogIn.value
//   }

//   return { setUser, logout, getisLogIn }
// })
