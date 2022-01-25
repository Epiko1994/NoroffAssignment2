<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import QuestionsList from '../components/QuestionsList.vue';

const store = useStore();
const questions = computed(() => store.state.questions);

onMounted(async () => {
    await store.dispatch('fetchQuestions');
});

console.log(questions);
</script>

<template>
    <fieldset>
        <label for="username" aria-label="Username">Username</label>
        <input type="text" id="username" placeholder="JohnDoe" />
    </fieldset>

    <fieldset>
        <label for="password" aria-label="Password">Password</label>
        <input type="password" id="password" placeholder="*****" />
    </fieldset>
    <ul>
        <QuestionsList />
    </ul>
</template>
