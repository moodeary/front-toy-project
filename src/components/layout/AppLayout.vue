<template>
  <q-header reveal class="bg-dark text-white" height-hint="75">
    <q-toolbar>
      <q-toolbar-title style="cursor"> Choonsik's home </q-toolbar-title>
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
            @click="clickLabel(menuItem.path)"
            clickable
            :active="menuItem.path === selected"
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
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter, RouterView } from 'vue-router'

const router = useRouter()
const miniState = ref(true)
const drawer = ref(true)
const selected = ref('')
const menuList = ref([])

onMounted(() => {
  getTabs()
})

const getTabs = async () => {
  try {
    const res = await axios.get('/api/v1/tab/get')
    menuList.value = menuList.value.concat(res.data)
    console.log(menuList.value)
  } catch (err) {
    console.error(err)
  }
}

const clickLabel = (path) => {
  selected.value = path
  if (path == 'home') {
    router.push(`/`)
  } else {
    router.push(`/${path}`)
  }
}
</script>

<style scoped>
.mini-state-true {
  width: calc(100vw - 75px);
  display: flex;
}
.mini-state-false {
  width: calc(100vw - 200px);
  display: flex;
}
</style>
