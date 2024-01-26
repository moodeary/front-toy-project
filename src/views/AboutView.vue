<template>
  <div class="about">
    <div style="display: flex; flex-direction: column">
      <h1 @click="saveToDo">메세지 생성</h1>
      <h1 @click="createMember">회원가입 버튼</h1>
      <h1 @click="loginMember">로그인 버튼</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  setup() {
    function saveToDo() {
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

    function createMember() {
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

    function loginMember() {
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

    return {
      saveToDo,
      createMember,
      loginMember
    }
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
