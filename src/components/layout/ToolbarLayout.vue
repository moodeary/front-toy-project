<template>
  <div class="toolbar-box">
    <q-toolbar class="bg-white text-dark toolbar">
      <q-btn @click="HomeBtn" flat size="16px" class="toolbar-button" label="Home" />
      <q-space />

      <q-btn flat class="tab-custom" label="Account">
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
      <q-btn flat @click="SignupBtn" class="tab-custom" label="signup" />
      <q-btn flat v-show="!getisLoggedIn()" @click="LoginBtn" class="tab-custom" label="login" />
      <q-btn flat v-show="getisLoggedIn()" @click="logoutBtn" class="tab-custom" label="logout" />
    </q-toolbar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
const router = useRouter()
const { isLoggedIn, logout, getisLoggedIn } = userStore()

const HomeBtn = () => {
  router.push('/home')
}

const LoginBtn = () => {
  router.push('/login')
}

const SignupBtn = () => {
  router.push('/signup')
}

const checkuserBtn = () => {}

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
