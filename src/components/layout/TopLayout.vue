<template>
  <div class="toolbar-box">
    <q-toolbar class="bg-white text-dark toolbar">
      <q-btn @click="HomeBtn" flat size="16px" class="toolbar-button" label="Home" />
      <q-space />

      <q-btn flat v-show="!getisLogIn()" @click="SignupBtn" class="tab-custom" label="회원가입" />
      <q-btn flat v-show="!getisLogIn()" @click="LoginBtn" class="tab-custom" label="로그인" />
      <q-btn v-show="getisLogIn()" flat class="tab-custom" label="계정 정보">
        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section @click="checkuserBtn">회원 정보</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>회원 탈퇴</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat v-show="getisLogIn()" @click="logoutBtn" class="tab-custom" label="로그아웃" />
    </q-toolbar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
import { sessionLogout } from '@/auth/index.js'

const { logout, getisLogIn } = userStore()

import basicAxios from '@/api/index.js'
const router = useRouter()

const HomeBtn = () => {
  router.push('/home')
}

const LoginBtn = () => {
  router.push('/login')
}

const SignupBtn = () => {
  router.push('/signup')
}

const logoutBtn = () => {
  sessionLogout()
  logout()
}

const checkuserBtn = async () => {
  try {
    await basicAxios.get('/admin')
  } catch (err) {
    console.error(err)
  }
}
</script>

<style scoped>
.toolbar-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px gray;
  margin: 10px 0 20px;
}

.toolbar {
  width: calc(100% - 40px);
}

.toolbar-button {
  font-weight: bold;
  opacity: 0.5;
}

.tab-custom {
  font-weight: bold;
  opacity: 0.5;
  font-size: 15px;
}
</style>
