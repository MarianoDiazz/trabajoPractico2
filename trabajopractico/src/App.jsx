import 'bootstrap/dist/css/bootstrap.min.css';
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation';
import Carusel from './components/Carusel';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navigation />
      <Carusel />
      <Footer />
    </>
  )
}

export default App
