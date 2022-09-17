import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import About from './components/About';
import ALert from './components/ALert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [Alert, setAlert] = useState(null);

  const showAlert = (message,type ) =>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    },1000)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }
  const Togglemode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "warning");
    }
  }
  return (
<>
    <Router>
    <Navbar title="I❤️Text" mode = {Mode} togglemode={Togglemode} aboutText = "This is About"></Navbar>
    <ALert alertText={Alert}/>
    <div className="container my-3">
      <Routes>
        <Route excat path="/about" element={<About  mode = {Mode} />}>
        </Route>
        <Route excat path="/" element = {<Textform showAlert = {showAlert} heading = "Try Word Counter, Character Counter, Remove extra spaces"  mode = {Mode}/>}>
        </Route>
      </Routes>
    </div>  
    </Router>
</>
  );
}

export default App;
