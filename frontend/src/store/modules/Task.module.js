import axios from 'axios'


const BASE_URL = "http://127.0.0.1:8000/api/tasks/";
const TaskModule = {
  state: {
    tasks: [],
    task: {
      title: '',
      description: '',
      completed: false
    }
  },
  mutations: {
    setTasks: (state, payload) => {
      state.tasks = payload.data;
    },
    addTaskToTasks: (state, payload) => {
      state.tasks.push(payload.data);
    },
    setTask: (state, payload) => {
      state.task = payload
    }
  },
  actions: {
    fetchTasks: async ({commit}) => {
      let data = await axios.get(BASE_URL);
      commit("setTasks", data);
    },
    addTask: async ({commit}, payload) => {
      let data = await axios.post(BASE_URL, payload);
      commit('addTaskToTasks', data);
      commit('setTask', data);
    },
    updateTask: async ({commit}, payload) => {
      let data = await axios.put(BASE_URL)
    }
  }
};

export default TaskModule;
