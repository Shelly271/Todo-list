<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

</script>

<style scoped>
  .container {
    max-width: 100px;
    margin: 0 auto;
  }
</style>