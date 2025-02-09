// src/App.jsx

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
  return (
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
  );
}
