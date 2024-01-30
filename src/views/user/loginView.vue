<template>
  <div class="login-body">
    <h5 class="create-user">Create Account</h5>
    <q-form @submit="onSubmit">
      <div class="form-box">
        <div id="id" class="input-tag">
          <q-badge class="login-badge" color="dark">아이디</q-badge>
          <q-input color="dark" outlined v-model="formData.id" placeholder=" id" />
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
        <div id="firstName" class="input-tag">
          <q-badge class="login-badge" color="dark">이름</q-badge>
          <q-input color="dark" outlined v-model="formData.firstName" placeholder=" first-name" />
        </div>
        <div id="lastName" class="input-tag">
          <q-badge class="login-badge" color="dark">성</q-badge>
          <q-input color="dark" outlined v-model="formData.lastName" placeholder="last-name" />
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
        <q-btn label="Submit" type="submit" color="dark" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  id: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDay: ''
})

const onSubmit = () => {
  console.log(formData.value)
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

#lastName {
  width: calc(22% - 20px);
}

#firstName {
  width: calc(28% - 20px);
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
