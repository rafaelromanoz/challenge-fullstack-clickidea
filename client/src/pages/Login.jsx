import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { login } from "../services/calls";

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token] = useLocalStorage('token', false);

  const handleButtonClick = async () => {
    const response = await login({user, password})
  }
  return (
    <>
      <Link style={{marginRight: '8px'}} to='/'>Logar</Link>
    </>
  )
}

export default Login;