import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Home />
        <Nosotros />
        <Servicios />
        <Contacto />
      </div>
      <Footer />
    </>
  );
}

export default App;
