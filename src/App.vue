<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal class="bg-dark text-white" height-hint="75">
      <q-toolbar>
        <q-toolbar-title> Choonsik's home </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              @click="clickLabel(menuItem.label)"
              clickable
              :active="menuItem.label === selected"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div :class="miniState ? 'mini-state-true' : 'mini-state-false'">
        <RouterView />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)
const miniState = ref(true)
const selected = ref('')

const clickLabel = (menuItem) => {
  selected.value = menuItem
  if (menuItem == 'home') {
    router.push(`/`)
  } else {
    router.push(`/${menuItem}`)
  }
}

const menuList = [
  {
    icon: 'inbox',
    label: 'home',
    separator: true
  },
  {
    icon: 'send',
    label: 'outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'feedback',
    separator: false
  },
  {
    icon: 'help',
    label: 'help',
    separator: false
  }
]
</script>

<style scoped>
.mini-state-true {
  width: calc(100vw - 200px);
  height: calc(100vh - 50px);
  display: flex;
}
.mini-state-false {
  width: calc(100vw - 75px);
  height: calc(100vh - 50px);
  display: flex;
}
</style>
