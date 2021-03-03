import store from 'store'

const apiHost = process.env.REACT_APP_API_URL

class Api {
    async _fetchApi(apiUrl, options = {}) {
        // api/text and /api/text will have the same behavior
        if (apiUrl.startsWith('/')) {
            apiUrl = apiUrl.substring(1)
        }

        const state = store.getState()
        const jwt = state.auth.jwt
        const AuthenticationHeader = jwt ? {Authentication: `Bearer ${jwt}`} : {}

        const response = await fetch(apiHost + apiUrl, {
            method: 'GET',
            ...options,
            headers: {
                ...options.headers,
                ...AuthenticationHeader
            }
        })

        return await response.json()
    }
    async fetchRandomText() {
        return await this._fetchApi('/texts/random')
    }
}

export default new Api()