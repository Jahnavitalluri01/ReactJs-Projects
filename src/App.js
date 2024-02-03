import './App.css';
import Header from './Components/Header/Header';
import Accordian from './Components/Accordian/Accordian';
import Changecolor from './Components/ChangeColor/Changecolor';
import Starrating from './Components/StarRating/Starrating';
import Imageslider from './Components/Imageslider/Imageslider';
import Loadmore from './Components/LoadMore/Loadmore';
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
          <Starrating />
          <h1>Image Slider</h1>
          <Imageslider url="https://picsum.photos/v2/list?page=1&limit=" limit={10}/>
          
      </div>
      <Loadmore url={'https://dummyjson.com/products'} />
    

    </div>
  );
}

export default App;
