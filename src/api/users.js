import { BASE_USER_URL } from '.';

const apiKey =
    'Wl5NCSOy6QDMhp73UHlpqczdjVrSCOi22e1UFy8z4U6gYPq4xgpWh632uL29wQj2';

export async function apiGetUser(username) {
    try {
        const response = await fetch(`${BASE_USER_URL}/tirvia?username=${username}`)
        const json = await response.json()
        return json
    } catch (error) {
        return error
    }

}

export async function apiUserRegister(
    action = 'register',
    username
) {
    try {
        const config = {

            method: "POST",
            headers: {
                "X-API-Key": apiKey,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                highScore: 0
            })


        }

        const respponse = await fetch(`${BASE_USER_URL}/trivia`, config)
        const {
            success,
            data,
            error
        } = await respponse.json()
        if(!success) {
            throw new Error(error);
        }
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}
