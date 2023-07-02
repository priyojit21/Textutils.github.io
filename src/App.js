// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
// import About from './components/About';
// import{BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState("Enable dark Mode");
  const [color, setColor] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtnText("Enable Light Mode");
      setColor('light');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      setbtnText("Enable Dark Mode");
      setColor('dark');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* * jaate ekhane raita na phele tai amra navbar er alada component baniye okhane bootstrap dhele ekhane just navbav return korlam */}
      {/* left side mode is hook and right side mode is hook */}
      {/* <Router> */}
      <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode} btnText={btnText} color={color} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />} >
          </Route>
          <Route exact path="/" element={<Textform head="Write any Text" mode={mode} />}>
          </Route>
      </Routes>     */}
      <Textform head = "Write any Text" mode = {mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
