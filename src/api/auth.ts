import axios from 'axios';

const API_URL = 'https://your-api-url.com';

const authAPI = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },

  register: async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  },

  forgotPassword: async (email: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
      return response.data;
    } catch (error) {
      throw new Error('Failed to process password reset request.');
    }
  },

  confirmEmail: async (email: string, code: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/confirm`, { email, code });
      return response.data;
    } catch (error) {
      throw new Error('Email confirmation failed. Please try again.');
    }
  }
};

export default authAPI;