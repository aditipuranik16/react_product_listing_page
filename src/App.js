import React from 'react';
import './App.css';
import Header from './components/header';
import MainContent from './components/mainContent';
import Footer from './components/footer';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
