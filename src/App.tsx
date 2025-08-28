import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
