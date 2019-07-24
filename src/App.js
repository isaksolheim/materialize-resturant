import React from 'react';
import './styles/main.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Banner />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
