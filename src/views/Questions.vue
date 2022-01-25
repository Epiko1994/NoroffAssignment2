<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
const store = useStore();
const questions = computed(() => store.state.question)
onMounted(async () => {
    store.dispatch("fetchQuestions");
})
console.log(questions.value);
</script>

<template>
    <ul>
        <li v-for="question in questions" :key="question.id" :question="question">

        </li>
    </ul>
</template>