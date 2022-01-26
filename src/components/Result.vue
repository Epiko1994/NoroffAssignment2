<script setup>
import { ref } from 'vue';
import { apiFetchQuestions } from '../api/questions'

const getQuestionsAPI = "https://opentdb.com/api.php?amount=10"
let questionsList = ref([])


const onClick = async () => {
    const questions = await apiFetchQuestions()
    questionsList.value = questions[1]
    console.log(questionsList.value)
}


</script>

<template class="container mx-auto px-4">
    <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos</button>
    <li v-for="question in questionsList" :key="question.question"> 
            <span>{{ question.question }}</span>
    </li>
</template>