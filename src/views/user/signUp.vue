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
      <div class="form-box">
        <div id="name" class="input-tag">
          <q-badge class="login-badge" color="dark">이름</q-badge>
          <q-input color="dark" outlined v-model="formData.name" placeholder="name" />
        </div>
        <div id="email" class="input-tag">
          <q-badge class="login-badge" color="dark">이메일</q-badge>
          <q-input
            color="dark"
            outlined
            type="email"
            v-model="formData.email"
            placeholder="email"
          />
        </div>
      </div>
      <div class="form-box">
        <div id="phone" class="input-tag">
          <q-badge class="login-badge" color="dark">전화번호</q-badge>
          <q-input
            color="dark"
            outlined
            v-model="formData.phone"
            mask="(###) #### - ####"
            placeholder=" phone-nunber"
          />
        </div>
        <div id="birthDay" class="input-tag">
          <q-badge class="login-badge" color="dark">생년원일</q-badge>
          <q-input color="dark" outlined type="date" v-model="formData.birthDay" />
        </div>
      </div>
      <div class="submit-btn">
        <q-btn label="회원가입" type="submit" color="dark" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  loginId: 'choonsik',
  password: 'qweqwe123!',
  name: '황병수',
  email: 'moodeary@gmail.com',
  phone: '010-7177-0677',
  birthDay: '1991-02-27'
})

const onSubmit = async () => {
  console.log(formData.value)
  try {
    const res = await axios.post('/api/v1/member/signUp', formData.value)
    console.log('로그인', res)
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

#name {
  width: calc(50% - 20px);
}

#email {
  width: calc(50% - 20px);
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
