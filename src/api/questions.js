import { BASE_QUESTION_URL } from '.';

export async function apiFetchQuestions() {
    try {
        const response = await fetch(`${BASE_QUESTION_URL}.php?amount=10`);

        if (!response.ok) {
            throw new Error('could not find questions');
        }

        // const json = await response.json()
        // console.log(json.results)
        // return json.results

        const {
            response_code,
            results,
            error = 'Could not fetch questions',
        } = await response.json();


        if (response_code !== 0) {
            throw new Error(error);
        }
        return [null, results];
    } catch (error) {
        return [error.message, []];
    }
}
