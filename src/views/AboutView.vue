<template>
  <div class="about">
    <h1 @click="saveToDo">This is an about page</h1>
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
            title: '야호'
          })
          .then((res) => {
            console.log('응답값')
            // this.reviewList.push(res.data);
            // this.todo = "";
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        console.log('내용을 입력해주세요.')
      }
    }

    return {
      saveToDo
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
