export const userFromLs = {
    saveUser: function saveUserToLocalStorage(user) {
        window.localStorage.setItem('user', JSON.stringify(user))
    },

    getUser: function getUserFromLocalStorage() {
        try {
            return JSON.parse(window.localStorage.getItem('user'))
        } catch {
            return null
        }
    },

    removeUser: function removeUserFromLocalStorage() {
        window.localStorage.removeItem('user')
    },
}
