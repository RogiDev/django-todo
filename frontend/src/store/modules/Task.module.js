import axios from 'axios'

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
      state.tasks.push(payload);
    }
  },
  actions: {
    fetchTasks: async ({commit}) => {
      let data = await axios.get('http://127.0.0.1:8000/api/tasks/');
      commit("setTasks", data);
    },
    addTask: async (task,{commit}) => {
      let data = await axios.post('http://127.0.0.1:8000/api/tasks/')
    }
  }
};

export default TaskModule;
