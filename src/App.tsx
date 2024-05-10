import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Connect from './pages/connect';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;