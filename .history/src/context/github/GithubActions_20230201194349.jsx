const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

// * GET search results
/**
 * Search for GitHub users by text
 * @param {String} text - text to search for
 * @returns {Array} users - array of user objects
 */
export const searchUsers = async (text) => {
    // Create a query string from the text
    const params = new URLSearchParams({
        q: text
    })
    // Fetch the users from the GitHub API
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    // Get the items from the response
    const { items } = await response.json()

    // Return the items
    return items
}

// * GET single user 
export const getUser = async (login) => {
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