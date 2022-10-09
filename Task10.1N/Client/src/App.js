import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import CardList from './Components/CardList';
import Button from './Components/Button';
import Buttons from './Components/Buttons';
import Footer from './Components/Footer';
import Form from './Components/Form';
function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div class = "new">
    <h1>Featured Articles</h1>
    </div>
    <CardList/>
    <Button/>
    <div class = "news">
    <h1>Featured Tutorials</h1>
    </div>
    <CardList/>
    <Buttons/>
    <Form/>
    <Footer/>
    </div>
  );
}

export default App;