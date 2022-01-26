<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import QuestionsListItem from './QuestionsListItem.vue';

const store = useStore();

const questions = computed(() => store.state.questions);
</script>

<template>
    <ul>
        <QuestionsListItem
            v-for="question in questions"
            :key="question.id"
            :question="question"
        />
    </ul>
</template>
