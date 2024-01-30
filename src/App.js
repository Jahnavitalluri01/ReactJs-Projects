import './App.css';
import Header from './Components/Header/Header';
import Accordian from './Components/Accordian/Accordian';
import Changecolor from './Components/ChangeColor/Changecolor';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import { Accordion, Container } from 'react-bootstrap';


function App() {
 

  return (
    <div className="App">     
      <div className='fluid-container'>
        <Header />
      </div>
      <div className='container'>
          <Accordian />
          <Changecolor />
      </div>
    

    </div>
  );
}

export default App;
