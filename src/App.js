import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ServiceDetail from './pages/ServicesDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;