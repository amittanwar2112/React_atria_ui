import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard'
import Navbars from './component/navbar'
import Newdashboard from './component/newdashboard'
function App() {
  return (
    <div className="App">
        <Navbars></Navbars>
        <Newdashboard></Newdashboard>
        
    </div>
  );
}

export default App;
