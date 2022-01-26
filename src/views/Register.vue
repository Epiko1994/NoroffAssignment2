<script setup>
import { ref } from 'vue';
import { apiUserRegister, apiGetUser } from '../api/users';


const username = ref("")
const highScore = ref("")
const checkUsername = ref("")
const checkHighScore = ref("")

const onSubmit = async () =>{
    const [error, user ] = await apiUserRegister(username.value, highScore.value)
    console.log(user)
}

const onSubmit2 = async () =>{
    const [response] = await apiGetUser(checkUsername.value)
    console.log(response.highScore)
    checkHighScore.value = response.highScore
}

</script>

<template>
<button onclick="onSubmit2"></button>
    <main class="container mx-auto px-4">
        <h1 class="mb-3 text-2xl">Create a user with a high-score</h1>

        <form @submit.prevent="onSubmit">
            <fieldset class="mb-3">
                <label for="username" aria-label="Username" class="block">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                    class="border border-slate-300"
                    v-model="username"
                />
            </fieldset>

            <fieldset class="mb-3">
                <label for="highScore" aria-label="highScore" class="block">High Score</label>
                <input
                    type="number"
                    id="highScore"
                    placeholder="Enter your high-score"
                    class="border border-slate-300"
                    v-model="highScore"
                />
            </fieldset>

            <button type="submit" class="bg-indigo-500 text-white p-3 rounded mb-3">Register</button>
        </form>



        <form @submit.prevent="onSubmit2">
            <fieldset class="mb-3">
                <label for="username" aria-label="Username" class="block">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter a name"
                    class="border border-slate-300"
                    v-model="checkUsername"
                />
            </fieldset>

            <fieldset class="mb-3">
                <label for="highScore" aria-label="highScore" class="block">High Score</label>
                <label id="highScore" v-bind="highScore"> {{ checkHighScore }} </label>
            </fieldset>

            <button type="submit" class="bg-indigo-500 text-white p-3 rounded">Check high-score</button>
        </form>
    </main>
</template>