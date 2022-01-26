<script setup>
import { ref } from 'vue';
import { apiFetchQuestions } from '../api/questions'

const getQuestionsAPI = "https://opentdb.com/api.php?amount=10"
let questionsList = ref("")


const onClick = async () => {
    const questions = await apiFetchQuestions()
    questionsList = questions
    console.log(questionsList[0].question)
}


</script>

<template>
    <button type="button" @click="onClick">Get questinos</button>
    <li>
        <div v-for="question in questionsList" :key="question.question" :question="question">
            <h2>{{ question.question.value }}</h2>
        </div>
    </li>
</template>