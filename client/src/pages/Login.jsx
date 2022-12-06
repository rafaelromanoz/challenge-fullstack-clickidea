import { useState } from 'react';
import { EntryPage } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import api from '../services/api';

const Login = () => {
  const [login, setUser] = useState('');
  const [senha, setPassword] = useState('');
  const notify = (message) => toast.error(message);
  const navigate = useNavigate();

  const handlerButtonLoginClick = async () => {
      try {
          const response = await api.post('/login/',{ login, senha });
          localStorage.setItem('token', response.data.token);
          navigate('/board');
      } catch (error) {
        console.error(error);
        notify(error.response.data.message);
      }
  };
  return (
    <EntryPage>
      <EntryCard>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="login-user">Usuário</label>
            <Input
              type="text"
              placeholder="nome@email"
              onChange={({ target }) => setUser(target.value)}
              id="login-user"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="login-password">Senha</label>
            <Input
              type="password"
              placeholder="senha"
              id="login-password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </InputGroup>
          <Button onClick={() => handlerButtonLoginClick()}>Logar</Button>
        </form>
      </EntryCard>
      <Toaster />
    </EntryPage>
  );
};

export default Login;
