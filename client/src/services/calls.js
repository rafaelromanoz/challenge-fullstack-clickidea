import api from "./api";

export const login = async (user) => {
  try {
    return api.post('/login/', { ...user });
  } catch (error) {
    throw error.response ? error.response.data.message : 'Conexão falhou!';
  }
};
