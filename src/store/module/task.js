import axios from 'axios';
import Swal from 'sweetalert2';

const task = {
    namespaced: true,
    state: {
        tasks: [],
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        },
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        newTasks(state, task) {
            state.tasks.unshift(task);
        },
        updateTasks(state, updatedTask) {
            const index = state.tasks.findIndex(task => task.id === updatedTask.id);
            if (index !== -1) {
                state.tasks.splice(index, 1, updatedTask);
            }
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                commit('setTasks', response.data);
                console.log(response);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error fetching the tasks.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error fetching tasks:', error);
            }
        },
        async filterTask({ commit }, limit) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                commit('setTasks', response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error fetching the tasks.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error fetching tasks:', error);
            }
        },
        async createTask({ commit }, title) {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title: title,
                    completed: false,
                });
                commit('newTasks', response.data);
                Swal.fire({
                    title: 'Create Task',
                    text: false,
                    icon: 'success',
                    confirmButtonText: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    toast: true,
                    timer: 2000,
                    position: 'top',
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error creating the task.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error creating task:', error);
            }
        },
        async updateTask({ commit }, task) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                    id: task.id,
                    title: task.title,
                    completed: !task.completed,
                });
                commit('updateTasks', response.data);
                Swal.fire({
                    title: 'Update Task',
                    text: false,
                    icon: 'success',
                    confirmButtonText: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    toast: true,
                    timer: 2000,
                    position: 'top',
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error updating the task.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error updating task:', error);
            }
        },
        async deleteTask({ commit }, id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
                commit('deleteTask', id);
                Swal.fire({
                    title: 'Delete Task',
                    text: false,
                    icon: 'warning',
                    confirmButtonText: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    toast: true,
                    timer: 2000,
                    position: 'top',
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error deleting the task.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error deleting task:', error);
            }
        },
    },
};

export default task;
