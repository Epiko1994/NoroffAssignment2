<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['onAuthSuccess']);

const multipleChoice = ref('');
const TrueFalse = ref('');
const displayError = ref('');


//Mc = Multiple choice
const onMcClick = async (action) => {
    const error = await store.dispatch('loginRegister', {
        action,
        username,
        password,
    });

    if (error !== null) {
        displayError.value = error;
    } else {
        emit('onAuthSuccess');
    }
};

// Tf = True / false question (Boolean)
const onTfClick = async (action) => {
    const error = await store.dispatch('loginRegister', {
        action,
        username,
        password,
    });

    if (error !== null) {
        displayError.value = error;
    } else {
        emit('onAuthSuccess');
    }
};
</script>

<template>
    <form class="mb-3">
        <fieldset class="mb-3">
            <label for="username" aria-label="Username" class="block">
                Username
            </label>
            <input
                type="text"
                id="username"
                placeholder="E.g., john.doe@email.com"
                class="border border-slate-300"
                v-model="username"
            />
        </fieldset>
        


        <div class="grid gap-2 grid-cols-2">
            <button
                @click="onRegisterLoginClick('login')"
                type="button"
                class="bg-green-600 text-white p-3 rounded"
            >
                Login
            </button>
            <button
                @click="onRegisterLoginClick('register')"
                type="button"
                class="bg-indigo-500 text-white p-3 rounded"
            >
                Register
            </button>
        </div>
    </form>

    <div v-if="displayError" class="bg-red-500 text-white p-3 rounded">
        <span class="text-lg block mb-3">Error</span>
        <p>{{ displayError }}</p>
    </div>
</template>
