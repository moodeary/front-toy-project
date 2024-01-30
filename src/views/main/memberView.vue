<template>
  <div class="q-pa-md row items-start q-gutter-md member-card">
    <div v-for="(item, index) in 10" :key="index">
      <q-card class="my-card" flat bordered>
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Cafe Basilico</div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">동그릿</div>
          <div class="text-caption text-grey">감기, 몸살</div>
        </q-card-section>

        <q-separator />

        <q-card-actions id="select-btn">
          <q-btn>선택 </q-btn>
          <q-btn>상세 보기 </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const itemList = ref([])
</script>

<style scoped>
.my-card {
  width: 230px;
}

#select-btn {
  display: flex;
  justify-content: space-around;
}

.member-card {
  display: flex;
  justify-content: center;
}
</style>
