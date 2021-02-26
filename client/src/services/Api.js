import store from 'store'

const apiHost = process.env.REACT_APP_API_URL

const Api = {
    async _fetchApi(apiUrl, options) {
        // api/text and /api/text will have the same behavior
        if (apiUrl.startsWith('/')) {
            apiUrl = apiUrl.substring(1)
        }

        const state = store.getState()
        const jwt = state.auth.jwt

        const response = await fetch(apiHost + apiUrl, {
            ...options,
            headers: {
                ...options.headers,
                Authentication: `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            }
        })

        return await response.json()
    },
    async fetchRandomText() {
        return await this._fetchApi('/text/random')
    }
}

export default Api