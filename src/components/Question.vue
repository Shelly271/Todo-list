<template>
    <div>
        <div class="question-container">
            <p class="question">
                How are you doing?
            </p>
        </div>
        <div class="container">
            <input type="submit" class="" value="A" />
            <p class="answer">This will be the answer</p>
        </div>
        <br />
        <div class="container">
            <input type="submit" class="" value="B" />
            <p class="answer">This will be the answer</p>
        </div>
        <br />
        <div class="container">
            <input type="submit" class="" value="C" />
            <p class="answer">This will be the answer</p>
        </div>
        <br />
        <div class="container">
            <input type="submit" class="" value="D" />
            <p class="answer">This will be the answer</p>
        </div>
        <!-- <div class="options-container">
                <div class="option">
                     <p class="option-label">A</p>
                     <div class="option-value">
                        <p>NaCl</p>
                     </div>
                </div>
            </div> -->
    </div>
</template>

<script setup>
import {defineProps} from "vue"
const { question} = defineProps(['question'])
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    height: 50px;
    width: 280%;

}

.answer {
    height: 20px;
    width: 250%;
    /* background-color: aquamarine; */
    margin-left: 3%;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
}

.question-container {
    margin-top: 10px;
}

.question {
    display: flex;
    font-size: 12px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: #D9D9D9;
    width: 70%;
    font-size: 33px;
    padding: 0px;
    height: 56px;
    left: 90px;
    top: 30px;
    /* Rectangle 96 */

    /* ;



background: #D9D9D9; */

}</style>