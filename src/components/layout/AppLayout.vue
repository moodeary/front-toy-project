<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :width="250"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list>
        <div :class="miniState ? 'mini-title-true' : 'mini-title-false'">
          <div>HAIDE</div>
        </div>
        <q-separator style="margin: 10px" />
        <template v-for="(menuItem, index) in sideList.columns" :key="index">
          <q-item
            @click="clickLabel(menuItem.path)"
            clickable
            :active="menuItem.path === selected"
            active-class="my-menu-link"
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
  <q-page-container style="width: 95vw; margin: 0 20px 20px">
    <TopLayout />
    <RouterView />
  </q-page-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, RouterView } from 'vue-router'
import sideList from '@/assets/sideList'
import TopLayout from '@/components/layout/TopLayout.vue'

const router = useRouter()
const miniState = ref(true)
const drawer = ref(true)
const selected = ref('home')

const Path = computed(() => {
  const urlPath = window.location.pathname
  if (urlPath === '/') {
    return 'home'
  }
  return urlPath.slice(1)
})

selected.value = Path.value

const clickLabel = (path) => {
  selected.value = path
  router.push(`/${path}`)
}
</script>

<style scoped>
.my-menu-link {
  color: white;
  background: #f2c037;
}

.mini-title-true,
.mini-title-false {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.mini-title-true {
  font-weight: bold;
  color: gray;
}

.mini-title-false {
  color: #f2c037;
  font-size: 30px;
}

.mini-title-false div,
.mini-title-true div {
  font-weight: bold;
}
</style>
