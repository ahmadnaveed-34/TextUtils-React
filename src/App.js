import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

// import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert('');
    },1500)
  }

  const [modeText, setModeText] = useState('Enable Dark Mode');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      setModeText('Enable Light Mode');
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark Mode";
      
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setModeText('Enable Dark Mode');
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <div className="container my-3">
      {/* <BrowserRouter>*/}
        <Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} modeText={modeText}/>
        <Alert alert={alert}/>
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element={

              } /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
    </>
  );
}

export default App;

