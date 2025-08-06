import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import LoginPage from './components/LoginPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
