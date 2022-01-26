<script setup>
import { ref } from 'vue';
import { apiFetchQuestions } from '../api/questions'

const getQuestionsAPI = "https://opentdb.com/api.php?amount=10"
let questionsList = ref([])
let incorrect_answers = ref([])
let correct_answer = ref ([])
console.log(incorrect_answers.value)


/*
const nextQuestion = async () => {
    const questions = await apiFetchQuestions()
    questionsList.value = questions[1]
    console.log(questionsList.value)
}

let A = [];
const getIncorrectAnswers = () => {
     for(let answer = 0; answer < incorrect_answers.value; answer++){
         A += incorrect_answers.value
     }



}  


</script>


<template class="container mx-auto px-4">
    <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos</button>
    <li v-for="question in questionsList" :key="question.question"> 
            <span>{{ question.question }}</span>
    </li>
    <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>

</template>

<template class="container mx-auto px-4">
    <div v-if="type === 'multiple'">
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>    
    </div>
    <div v-if="type === 'boolean'">
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>
        <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>



    </div>



    <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos</button>
    <li v-for="question in questionsList" :key="question.question"> 
            <span>{{ question.question }}</span>
    </li>
    <button type="button" class="bg-indigo-500 text-white p-3 rounded mb-3" @click="onClick">Get questinos></button>

</template>

/*






//     <form class="mb-3">
//         <fieldset class="mb-3">
//             <label for="username" aria-label="Username" class="block">
//                 Username
//             </label>
//             <input
//                 type="text"
//                 id="username"
//                 placeholder="E.g., john.doe@email.com"
//                 class="border border-slate-300"
//                 v-model="username"
//             />
//         </fieldset>
        


//         <div class="grid gap-2 grid-cols-2">
//             <button
//                 @click="onRegisterLoginClick('login')"
//                 type="button"
//                 class="bg-green-600 text-white p-3 rounded"
//             >
//                 Login
//             </button>
//             <button
//                 @click="onRegisterLoginClick('register')"
//                 type="button"
//                 class="bg-indigo-500 text-white p-3 rounded"
//             >
//                 Register
//             </button>
//         </div>
//     </form>

//     <div v-if="displayError" class="bg-red-500 text-white p-3 rounded">
//         <span class="text-lg block mb-3">Error</span>
//         <p>{{ displayError }}</p>
//     </div>
// </template>
