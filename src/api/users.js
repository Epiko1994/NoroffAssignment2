import { API_KEY, BASE_URL } from ".";

export async function apiGetUser(username) {
    try {
        const response = await fetch(`${BASE_URL}?username=${username}`)
        const json = await response.json()
        return json
    } catch (error) {
        return error
    }

}

export async function apiUserRegister(username, highScore) {
    try {
        const config = {

            method: "POST",
            headers: {
                "X-API-Key": API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                highScore
            })


        }

        const respponse = await fetch(BASE_URL, config)
        const { data } = await respponse.json()
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}
