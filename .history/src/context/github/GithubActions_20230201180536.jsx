const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

//* GET search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const { items } = await response.json()

    return items
}

// * GET single user 
export const getUser = async (login) => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json()

        dispatch({
            type: 'GET_USER',
            payload: data,
        })
    }
}

// * GET user repos from account
export const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const data = await response.json()

    dispatch({
        type: 'GET_REPOS',
        payload: data,
    })
}