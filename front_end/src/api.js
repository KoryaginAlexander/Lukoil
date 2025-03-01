import axios from 'axios';

// Базовый URL для API (замените на ваш реальный URL бэкенда)
const API_URL = 'http://localhost:8000/api/v1';

// Функция для регистрации пользователя
export const register = (email, password) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

// Функция для входа пользователя
export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { username: email, password });
};

// Функция для получения списка лотов
export const getLots = (skip = 0, limit = 10) => {
  return axios.get(`${API_URL}/lots`, {
    params: { skip, limit },
  });
};

// Функция для получения деталей конкретного лота
export const getLotDetail = (lotId) => {
  return axios.get(`${API_URL}/lots/${lotId}`);
};

// Функция для создания заказа
export const createOrder = (data) => {
  return axios.post(`${API_URL}/orders`, data);
};

// Функция для проверки авторизации (опционально)
export const checkAuth = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/check-auth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Добавление токена в заголовки запросов (опционально)
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Обработка ошибок (опционально)
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Если токен истек или недействителен, перенаправляем на страницу входа
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axios;