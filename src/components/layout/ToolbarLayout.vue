<template>
  <div class="toolbar-box">
    <q-toolbar class="bg-white text-dark toolbar">
      <q-btn @click="goHome" flat size="16px" class="toolbar-button" label="Home" />
      <q-space />

      <q-btn flat class="tab-custom" label="Account">
        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section @click="checkuserBtn">회원 정보</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section @click="logoutBtn">로그 아웃</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>회원 탈퇴</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat @click="goSignup" class="tab-custom" label="signup" />
      <q-btn flat @click="goLogin" class="tab-custom" label="login" />
    </q-toolbar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
const router = useRouter()
const { loginUser, logout } = userStore()

const goHome = () => {
  router.push('/home')
}

const goLogin = () => {
  router.push('/login')
}

const goSignup = () => {
  router.push('/signup')
}

const checkuserBtn = () => {
  if (loginUser()) {
    console.log('로그인 상태', loginUser())
  } else {
    console.log('비 로그인 상태')
  }
}

const logoutBtn = () => {
  logout()
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
