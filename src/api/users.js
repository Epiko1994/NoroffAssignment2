import { BASE_USER_URL } from '.';

const apiKey =
    'Wl5NCSOy6QDMhp73UHlpqczdjVrSCOi22e1UFy8z4U6gYPq4xgpWh632uL29wQj2';

export async function apiUserRegister(action = 'register', username) {
    try {
        const config = {
            method: 'POST',
            headers: {
                'X-API-KEY': apiKey,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username,
                highscore: 0,
            }),
        };

        const response = await fetch(`${BASE_USER_URL}/trivia`, config);
        const {
            success,
            data,
            error = 'An error occurred while registering user',
        } = await response.json();
        if (!success) {
            throw new Error(error);
        }
        return [null, data];
    } catch (error) {
        return [error.message, null];
    }
}
