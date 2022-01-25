import { createStore } from 'vuex';
import { apiFetchQuestions } from './api/questions';
import { apiUserRegister } from './api/users';

const initUser = () => {
    const storedUser = localStorage.getItem('trivia-user');
    if (!storedUser) {
        return null;
    }

    return JSON.parse(storedUser);
};

export default createStore({
    state: {
        user: initUser(),
        questions: [],
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
        setQuestions: (state, questions) => {
            state.questions = questions;
        },
    },
    actions: {
        async register({ commit }, { username }) {
            try {
                if (action !== 'register') {
                    throw new Error(
                        'register: Unknown action provided ' + action
                    );
                }
                const [error, user] = await apiUserRegister(
                    action,
                    username.value
                );

                if (error !== null) {
                    throw new Error(error);
                }

                commit('setUser', user);
                localStorage.setItem('trivia-user', JSON.stringify(user));

                return null;
            } catch (error) {
                return error.message;
            }
        },
        async fetchQuestions({ commit }) {
            const [error, questions] = await apiFetchQuestions();

            if (error !== null) {
                return error;
            }

            commit('setQuestions', questions);
            return null;
        },
    },
});
