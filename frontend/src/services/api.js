import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/api';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: config.API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor to attach token
    this.api.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  setAuthToken(token) {
    if (token) {
      this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.api.defaults.headers.common['Authorization'];
    }
  }

  // Auth methods
  async register(username, email, password) {
    const response = await this.api.post('/auth/register', {
      username,
      email,
      password,
    });
    return response.data;
  }

  async login(email, password) {
    const response = await this.api.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  }

  async getCurrentUser() {
    const response = await this.api.get('/auth/me');
    return response.data;
  }

  async updateProfile(data) {
    const response = await this.api.put('/auth/profile', data);
    return response.data;
  }

  // Modules methods
  async getModules(category = null) {
    const params = category ? { category } : {};
    const response = await this.api.get('/modules', { params });
    return response.data;
  }

  async getModule(id) {
    const response = await this.api.get(`/modules/${id}`);
    return response.data;
  }

  // Quizzes methods
  async getQuizzes(category = null) {
    const params = category ? { category } : {};
    const response = await this.api.get('/quizzes', { params });
    return response.data;
  }

  async getQuiz(id) {
    const response = await this.api.get(`/quizzes/${id}`);
    return response.data;
  }

  // Progress methods
  async getProgress() {
    const response = await this.api.get('/progress');
    return response.data;
  }

  async updateModuleProgress(moduleId) {
    const response = await this.api.post(`/progress/module/${moduleId}`);
    return response.data;
  }

  async updateQuizProgress(quizId, score, totalPoints) {
    const response = await this.api.post(`/progress/quiz/${quizId}`, {
      score,
      totalPoints,
    });
    return response.data;
  }
}

export default new ApiService();
