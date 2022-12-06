import { Routes, Route } from 'react-router-dom';
import Cards from './pages/Cards';
import Login from './pages/Login';
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cards" element={<Cards />} /> 
    </Routes>
  );
};

export default RoutesApp;
