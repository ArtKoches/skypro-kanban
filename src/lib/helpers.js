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

export const inputErrorHandler = {
    newTask: function handler({ task }) {
        if (
            !task.title.trim() ||
            !task.topic.trim() ||
            !task.description.trim() ||
            !task.date
        ) {
            throw new Error('Заполните все данные и повторите попытку')
        }
    },

    editTask: function handler({ task }) {
        if (
            !task.title.trim() ||
            !task.topic.trim() ||
            !task.status.trim() ||
            !task.description.trim() ||
            !task.date
        ) {
            throw new Error('Заполните все данные и повторите попытку')
        }
    },

    authUser: function handler({ data }) {
        if (!data.login.trim() || !data.password.trim()) {
            throw new Error('Заполните все поля формы')
        }
    },

    regUser: function handler({ data }) {
        if (!data.name.trim() || !data.login.trim() || !data.password.trim()) {
            throw new Error('Заполните все поля формы')
        }
    },
}
