import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
