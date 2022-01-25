import { BASE_URL } from ".";

export async function apiFetchQuestions() {
    try {
        const response = await fetch(`${BASE_URL}.php?amount=10`);

        if(!response.ok) {
            throw new Error('could not find questions');
        }

        const { success, data, error } = await response.json();

        if(!success) {
            throw new Error(error);
        }

        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
}