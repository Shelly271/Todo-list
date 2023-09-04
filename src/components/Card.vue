<template>
    <div>
        <div class="card" @click="navigateToQuiz">
        <img :src="quizzy.img" alt="">
        <div class="card-text">
          <h2>{{ quizzy.name }}</h2>
          <p>{{ quizzy.questions.length }} questions</p>
        </div>
      </div>
    </div>
</template>

<script setup>
//import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const navigateToQuiz = () => {
  router.push(`/quiz/${quizzy.id}`)
}

const { quizzy} = defineProps(['quizzy'])
</script>

<style scoped>
.card {
  width: 300px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 2px darkgray;
  cursor: pointer;
 
}

.card img {
  width: 100%;
  margin: 0;
  height: 130x;
}
.card:hover {
  border: 1px solid #777;
}

.card .card-text {
  padding: 0 6px;
}

.card .card-text h2 {
  font-weight: bold;
}

</style>