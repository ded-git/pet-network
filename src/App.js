import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Menu />
      <Main />
    </div>
  )
}

export default App;
