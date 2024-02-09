import './App.css';
import Header from './Components/Header/Header';
import Accordian from './Components/Accordian/Accordian';
import Changecolor from './Components/ChangeColor/Changecolor';
import Starrating from './Components/StarRating/Starrating';
import Imageslider from './Components/Imageslider/Imageslider';
import Loadmore from './Components/LoadMore/Loadmore';
import Nested from './Components/Nestednavbar/Nested'
import { sidemenu } from './Components/Nestednavbar/data';
import Qrcode from './Components/QrCode/Qrcode';
import Themechange from './Components/ThemeChange/Themechange';



function App() {
 

  return (
    <div className="App">     
      {/* <div className='fluid-container'>
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
      <Nested menus={sidemenu} /> */}
      {/* <Qrcode /> */}
      <Themechange />

    

    </div>
  );
}

export default App;
