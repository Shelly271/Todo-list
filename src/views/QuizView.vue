<template>
    <div>
        <header>
            <h4>Questions 1/10</h4>
            <div class="bar">
                <div class="completion">
                </div>
            </div>
        </header>
        <Question :question="quiz.questions[currentQuestionIndex]"></Question>
        <quizId></quizId>
    </div>
</template>

<script setup>
import Question from "../components/Question.vue"
import {useRoute } from "vue-router"
import { ref } from "vue"
import quizes from "../data/quizes.json"

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id == quizId)
const currentQuestionIndex = ref(0)

</script>
<style scoped>
header{
    margin-top: 20px;
    padding-bottom: 20px;
}

.bar{
    width: 200px;
    height: 35px;
    border: 3px solid bisque;
}

</style>