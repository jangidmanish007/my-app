import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')//whether dark mode is enabled or not 

const [alert, setalert] = useState(null)
const showAlert =(message, type)=>{
  setalert({
    msg: message,
    type: type

  })
  setTimeout(() =>{
    setalert(null)
  },1500)
}




  const toggleMode =()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#313131ed';
      showAlert("dark mode is enabled", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode is enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title="Manishj007" abouttext="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container-fluid mt-3">
     {/* <Switch> */}
           {/* use of exact  
             /user --> component 1
             /users/home --> component 2 */}
          {/* <Route exact path="/about"> */}
             {/* <About  mode={mode} />    */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
           <Textform  showAlert={showAlert} heading = "Enter the text to Anilaze below" mode={mode}/> 
          {/* </Route> */}
     {/* </Switch> */}
     </div>
     
     {/* </Router> */}
     </>
  );
}
export default App;

