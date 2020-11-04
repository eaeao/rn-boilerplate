import api from '../configs/api';

export const login = async (username, password) => {
  try {
    const response = await api.get('');

    if (response.data) {
      return response.data;
    }

    throw new Error('fail');
  } catch (error) {
    throw new Error(error);
  }
};
