<script setup>
import { ref } from 'vue';
import { useStore } from "vuex";
import { apiUserRegister } from '../api/users.js'

const store = useStore();

const username = ref('');

const onStartClick = async (action) => {
    const [error, user ] = await apiUserRegister(username.value)
}
</script>

<template>
    <form @submit.prevent="">
        <fieldset>
            <label for="username" aria-label="Username">Username</label>
            <input type="text" id="username" placeholder="JohnDoe" v-model="username" />
            
            <label for="difficulty-select" aria-label="Difficulty">
                Difficulty:
            </label>
            <select
                name="difficulty"
                id="difficulty-select"
                aria-placeholder="Select Difficulty"
            >
                Difficulty
            </select>
            
            <label for="number-of-questions" aria-label="Difficulty">
                Number of Questions:
            </label>
            <select 
                name="number-of-questions"
                id="number-of-questions"
            >
                Number of Questions
            </select>
            
            <label for="category" aria-label="Difficulty">
                Category:
            </label>
            <select 
                name="category"
                id="category"
            >
                Category
            </select>
        </fieldset>
        <button @click="onStartClick('register')" type="button" class="">Start Game!</button>
    </form>
</template>