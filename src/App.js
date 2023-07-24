import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar Mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className={`container ${mode === 'dark' ? 'white-text' : ''}`}>
        <Textform showAlert={showAlert} heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
