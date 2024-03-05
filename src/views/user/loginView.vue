<template>
  <div class="login-body">
    <h5 class="create-user">Create Account</h5>
    <q-form @submit="onSubmit">
      <div class="form-box">
        <div id="id" class="input-tag">
          <q-badge class="login-badge" color="dark">아이디</q-badge>
          <q-input color="dark" outlined v-model="formData.username" placeholder=" id" />
        </div>
        <div id="password" class="input-tag">
          <q-badge class="login-badge" color="dark">비밀번호</q-badge>
          <q-input
            color="dark"
            outlined
            type="password"
            v-model="formData.password"
            placeholder=" password"
          />
        </div>
        <button
          id="maleBtn"
          @click="selectGender('male')"
          :style="{ backgroundColor: selectedGender === 'male' ? 'red' : '' }"
        >
          남자
        </button>
        <button
          id="femaleBtn"
          @click="selectGender('female')"
          :style="{ backgroundColor: selectedGender === 'female' ? 'red' : '' }"
        >
          여자
        </button>
      </div>
      <div class="submit-btn">
        <q-btn label="로그인" type="submit" color="dark" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { sessionLogin } from '@/auth/index.js'
import { userStore } from '@/stores/user'
const { setUser } = userStore()

import basicAxios from '@/api/index.js'

const router = useRouter()
const selectedGender = ref()
const selectGender = (gender) => {
  // 선택된 성별 업데이트
  selectedGender.value = gender
}
const formData = ref({
  username: '',
  password: ''
})

const onSubmit = async () => {
  const loginForm = new FormData()
  loginForm.append('username', formData.value.username)
  loginForm.append('password', formData.value.password)

  try {
    const res = await basicAxios.post('/login', loginForm)

    const refresh_token = res.headers.refresh_token
    const access_token = res.headers.access_token

    if (access_token) {
      const parts = access_token.split('.')
      const payload = JSON.parse(atob(parts[1]))

      sessionLogin(payload, refresh_token, access_token)
      setUser(payload)

      router.push('/home')
    } else {
      console.log('로그인 실패')
    }
  } catch (err) {
    console.error(err)
  }
}
</script>

<style scoped>
.login-body {
  width: 90%;
  min-width: 53%;
  max-width: 700px;
  margin: auto;
  border: 1.5px solid lightgray;
  padding: 15px 15px 25px;
  box-sizing: border-box;
}

.login-badge {
  margin: 15px 2px 5px;
  padding: 4px 10px;
}

.form-box {
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
}

.input-tag {
  margin: 0 10px;
}

#phone,
#id,
#birthDay,
#password {
  width: calc(50% - 20px);
}

.create-user {
  margin: 10px 0 5px 10px;
}

.submit-btn {
  display: flex;
  flex-direction: row-reverse;
  margin: 40px 10px 0;
}
</style>
