import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trading from './pages/Trading';
import Portfolio from './pages/Portfolio';
import AIChat from './pages/AIChat';
import Education from './pages/Education';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/education" element={<Education />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
