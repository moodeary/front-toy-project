<template>
  <div class="about">
    <div style="display: flex; flex-direction: column">
      <h1 @click="saveToDo">메세지 생성</h1>
      <h1 @click="createMember">회원가입 버튼</h1>
      <h1 @click="loginMember">로그인 버튼</h1>
      <div class="count">{{ counter.count }}</div>
      <div class="button">
        <button @click="counter.decrement">-</button>
        <button @click="counter.increment">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { counterStore } from '@/stores/counter'

const counter = counterStore()
const saveToDo = () => {
  if (this.todo != '') {
    axios
      .post('/api/v1/todo/save', {
        title: '메세지 입력 해주세요.'
      })
      .then(() => {
        console.log('ToDo 메세지 생성')
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    console.log('내용을 입력해주세요.')
  }
}

const createMember = () => {
  axios
    .post('/api/v1/member/signUp', {
      loginId: 'admin',
      nickName: 'admin',
      password: 'admin'
    })
    .then(() => {
      console.log('회원가입')
    })
    .catch((err) => {
      console.log(err)
    })
}

const loginMember = () => {
  if (this.todo != '') {
    axios
      .post('/api/v1/member/login', {
        loginId: 'admin',
        nickName: 'admin',
        password: 'admin'
      })
      .then((res) => {
        console.log('로그인', res)
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    console.log('내용을 입력해주세요.')
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
