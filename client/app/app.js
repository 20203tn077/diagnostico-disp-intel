const api = {
    baseUrl: 'http://localhost:3000',
    fetch: function (input, init = {}) {
        return fetch(new URL(input, this.baseUrl), {
            ...init,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },
}
