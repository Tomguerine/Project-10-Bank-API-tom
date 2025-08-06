import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import UserPage from './components/UserPage.jsx';
import LoginPage from './components/LoginPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" eement={<NotFound />} />
    </Routes>
  );
}
