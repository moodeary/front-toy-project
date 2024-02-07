<template>
  <div class="box">
    <div class="main1"></div>
    <div class="main2">
      <div>
        <q-badge class="badge" outline color="dark">기능 버튼</q-badge>
      </div>
    </div>
    <div class="main3"></div>
  </div>
</template>

<script setup>
import { counterStore } from '@/stores/counter'

const counter = counterStore()
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

.badge {
  margin: 15px;
  height: 30px;
  font-weight: bold;
}
</style>
