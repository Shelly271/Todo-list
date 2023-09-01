<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search" v-model.trim="search" />
    </header>
    <div class="options-container">
     <Card v-for="quiz in quizes" :key="quiz.id" :quizzy="quiz"/>
    </div>
  </div>
</template>

<script setup>
import q from "./data/quizes.json";
import { ref, watch } from "vue";
import Card from "./components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});

</script>

<style scoped>
.container {
  max-width: 100px;
  margin: 0 auto;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

}

header {
  margin-bottom: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none !important;
  background-color: #dae4f5;
  padding: 6px;
  border-radius: 5px !important;
}

</style>