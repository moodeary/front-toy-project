<template>
  <div class="box">
    <div class="main1"></div>
    <div class="main2">
      <div>
        <q-badge class="badge" outline color="dark">기능 버튼</q-badge>
        <div class="button-list">
          <q-btn glossy color="dark" icon="mail" label="메세지" @click="saveToDo" />
          <q-btn glossy color="dark" icon="mail" label="회원가입" @click="createMember" />
          <q-btn glossy color="dark" icon="mail" label="로그인" @click="loginMember" />
          <q-btn glossy color="dark" icon="mail" label="메세지" @click="saveToDo" />
          <q-btn glossy color="dark" icon="mail" label="회원가입" @click="createMember" />
          <q-btn glossy color="dark" icon="mail" label="로그인" @click="loginMember" />
        </div>
      </div>
    </div>
    <div class="main3"></div>
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
.count {
  margin: auto;
  font-weight: bold;
}

.count button {
  margin: 0 10px;
  width: 70px;
}

.box {
  display: flex;
  flex-wrap: wrap;
}

.main1 {
  width: calc(65% - 30px);
  height: calc(40vh - 50px);
  margin: 0 10px 10px 20px;
  border: 1.5px solid lightgray;
}

.main2 {
  width: calc(35% - 30px);
  height: calc(40vh - 50px);
  margin: 0 20px 10px 10px;
  border: 1.5px solid lightgray;
}

.main3 {
  width: calc(100% - 40px);
  height: calc(60vh - 80px);
  margin: 10px 20px 10px 20px;
  border: 1.5px solid lightgray;
}

.button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-list button {
  margin: 5px;
  width: 25%;
}

.badge {
  margin: 15px;
  height: 30px;
  font-weight: bold;
}
</style>
