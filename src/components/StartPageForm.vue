<script setup>
import { ref } from 'vue';
import { useStore } from "vuex";

const store = useStore();

const username = ref('');

const onStartClick = async (action) => {
    const error = await store.dispatch('register', {
        action,
        username,
    });
}

</script>

<template>
    <fieldset>
        <label for="username" aria-label="Username">Username</label>
        <input type="text" id="username" placeholder="JohnDoe" />
        
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
</template>