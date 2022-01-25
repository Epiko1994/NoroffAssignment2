import { createStore } from "vuex";
import { apiFetchQuestions } from "./api/questions";

export default createStore({
    state: {
        questions: []
    },
    mutations: {
        setQuestions: (state, questions) => {
            state.questions = questions;
        }
    },
    actions: {
        async fetchQuestions({commit}) {
            const [error, questions] = await apiFetchQuestions();
            if(error !== null) {
                return error;
            }

            commit("setQuestions", questions);
            return null;
        }
    },
})