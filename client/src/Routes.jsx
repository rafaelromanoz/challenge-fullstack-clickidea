import { Routes, Route } from 'react-router-dom';
import Board from './components/Board/Board';
import Login from './pages/Login';
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/board" element={<Board />} /> 
    </Routes>
  );
};

export default RoutesApp;
