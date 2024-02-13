import './App.css';
import Login from './components/Layouts/Login';
import Navbar from './components/Layouts/Navbar';
import SignUp from './components/Layouts/SignUp';
import Home from './components/Layouts/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [myStyle, SetmyStyle] = useState({
    width: '50%',
    margin: 'auto',
    padding: '20px',
    border: '2px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
  });
var a=myStyle;
console.log(a);
  const tooglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      SetmyStyle({
        width: '50%',
        margin: 'auto',
        padding: '20px',
        border: '2px solid black',
        borderRadius: '10px',
        backgroundColor: '#042743',
        color: 'white',
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'lightgrey';
      SetmyStyle({
        width: '50%',
        margin: 'auto',
        padding: '20px',
        border: '2px solid black',
        borderRadius: '10px',
        backgroundColor: 'lightgrey',
      });
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Navbar" mode={mode} tooglemode={tooglemode} />
        <div className="container my-3">
          <Routes>
            <Route  path="/" element={<Home/>}/>            
            <Route exact path="/signup" element={ <SignUp mode={mode} />}/>
             
            <Route exact path="/login" element={ <Login mode={mode} />}/>
        
          </Routes>
          {/* <SignUp mode={mode}/> */}
          {/* <Login mode={mode}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
