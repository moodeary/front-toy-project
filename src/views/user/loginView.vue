<template>
  <div class="login-body">
    <h5 class="create-user">Create Account</h5>
    <q-form @submit="onSubmit">
      <div class="form-box">
        <div id="id" class="input-tag">
          <q-badge class="login-badge" color="dark">아이디</q-badge>
          <q-input color="dark" outlined v-model="formData.loginId" placeholder=" id" />
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
      </div>
      <div class="submit-btn">
        <q-btn label="로그인" type="submit" color="dark" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { userStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user, setUser, getisLoggedIn } = userStore()

const formData = ref({
  loginId: '',
  password: ''
})

const onSubmit = async () => {
  console.log(JSON.stringify(formData.value))
  try {
    const res = await axios.post('/api/member/login', JSON.stringify(formData.value), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
      }
    })
    await setUser(res.data)
    if (getisLoggedIn()) {
      console.log('로그인 되었습니다.')
      router.push('/home')
    } else {
      console.log('로그인이 되지 않았습니다.')
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
