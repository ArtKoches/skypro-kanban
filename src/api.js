const baseUserHost = 'https://wedev-api.sky.pro/api/user'
const baseKanbanHost = 'https://wedev-api.sky.pro/api/kanban'

export const userApi = {
    userAuth: async function authorisation({ login, password }) {
        try {
            const response = await fetch(`${baseUserHost}/login`, {
                method: 'POST',
                body: JSON.stringify({
                    login,
                    password,
                }),
            })

            if (!response.ok) {
                throw new Error('Неверный логин или пароль')
            }

            const data = await response.json()
            return data.user
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Проверьте интернет соединение')
            }

            throw new Error(error.message)
        }
    },

    userReg: async function register({ login, name, password }) {
        try {
            const response = await fetch(baseUserHost, {
                method: 'POST',
                body: JSON.stringify({
                    login,
                    name,
                    password,
                }),
            })

            if (!response.ok) {
                throw new Error('Пользователь с таким логином уже существует')
            }

            const data = await response.json()
            return data.user
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Проверьте интернет соединение')
            }

            throw new Error(error.message)
        }
    },
}

export const kanbanApi = {
    getTasks: async function getListTasks({ token }) {
        try {
            const response = await fetch(baseKanbanHost, {
                method: 'GET',
                headers: {
                    Authorization: token,
                },
            })

            if (!response.ok) {
                throw new Error('Ошибка сервера')
            }

            const data = await response.json()
            return data.tasks
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Проверьте интернет соединение')
            }

            throw new Error(error.message)
        }
    },

    createTask: async function createNewTask({ token, task }) {
        try {
            const response = await fetch(baseKanbanHost, {
                method: 'POST',
                headers: {
                    Authorization: token,
                },
                body: JSON.stringify(task),
            })

            if (!response.ok) {
                throw new Error('Ошибка сервера')
            }

            const data = await response.json()
            return data.tasks
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Проверьте интернет соединение')
            }

            throw new Error(error.message)
        }
    },

    deleteTask: async function removeTask({ token, taskId }) {
        try {
            const response = await fetch(`${baseKanbanHost}/${taskId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: token,
                },
            })

            if (!response.ok) {
                throw new Error('Ошибка сервера')
            }

            const data = await response.json()
            return data.tasks
        } catch (error) {
            if (error.message === 'Failed to fetch') {
                throw new Error('Проверьте интернет соединение')
            }

            throw new Error(error.message)
        }
    },
}
