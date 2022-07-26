import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Main from './pages/Main';
import Mac from './pages/Mac';

function App() {
  return (
    < >
    <Nav />
    <div className='App'>
      <header className="App-header">
        <Mac />
       <Main />
      </header>
    </div>
    </>
  );
}

export default App;
