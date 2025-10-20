// API Configuration
// Use your computer's IP address for testing on phone
// Change back to 'http://localhost:5000/api' for emulator testing
const API_URL = 'http://192.168.8.38:5000/api';

export default {
  API_URL,
  ENDPOINTS: {
    AUTH: {
      REGISTER: `${API_URL}/auth/register`,
      LOGIN: `${API_URL}/auth/login`,
      ME: `${API_URL}/auth/me`,
    },
    MODULES: {
      GET_ALL: `${API_URL}/modules`,
      GET_ONE: (id) => `${API_URL}/modules/${id}`,
    },
    QUIZZES: {
      GET_ALL: `${API_URL}/quizzes`,
      GET_ONE: (id) => `${API_URL}/quizzes/${id}`,
    },
    PROGRESS: {
      GET: `${API_URL}/progress`,
      UPDATE_MODULE: (id) => `${API_URL}/progress/module/${id}`,
      UPDATE_QUIZ: (id) => `${API_URL}/progress/quiz/${id}`,
    },
  },
};
