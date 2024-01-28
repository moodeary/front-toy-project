<template>
  <div class="body">
    <div class="main">
      <div class="q-pa-md q-gutter-sm">
        <q-btn glossy color="dark" icon="mail" label="메세지 생성" @click="saveToDo" />
        <q-btn glossy color="dark" icon="mail" label="회원가입 버튼" @click="createMember" />
        <q-btn glossy color="dark" icon="mail" label="로그인 버튼" @click="loginMember" />
      </div>
      <div class="q-pa-md q-gutter-sm count">{{ counter.count }}</div>
      <div class="q-pa-md q-gutter-sm count">
        <q-btn glossy color="dark" label="-" @click="counter.decrement" />
        <q-btn glossy color="dark" label="+" @click="counter.increment" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { counterStore } from '@/stores/counter'

const counter = counterStore()

const saveToDo = async () => {
  try {
    await axios.post('/api/v1/todo/save', {
      title: '메세지 입력 해주세요.'
    })
    console.log('ToDo 메세지 생성')
  } catch (err) {
    console.error(err)
  }
}

const createMember = async () => {
  try {
    await axios.post('/api/v1/member/signUp', {
      loginId: 'admin',
      nickName: 'admin',
      password: 'admin'
    })
    console.log('회원가입')
  } catch (err) {
    console.error(err)
  }
}

const loginMember = async () => {
  try {
    const res = await axios.post('/api/v1/member/login', {
      loginId: 'admin',
      nickName: 'admin',
      password: 'admin'
    })
    console.log('로그인', res)
  } catch (err) {
    console.error(err)
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.count {
  margin: auto;
  font-weight: bold;
}

.count button {
  margin: 0 10px;
  width: 70px;
}

.body {
  width: calc(100vw - 57px);
  height: calc(100vh - 50px);
  display: flex;
}
</style>
