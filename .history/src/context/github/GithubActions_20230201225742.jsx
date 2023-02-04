import axios from "axios"

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
    
})
// * GET search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

// * GET Single User and Repositories
export const getUserand = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    if (response.status === 404) {
        window.location = '/notfound'
    } else {
        const data = await response.json()
        return data
    }
}

// * GET user repos from account
export const getUserRepos = async (login) => {
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
    return data
}