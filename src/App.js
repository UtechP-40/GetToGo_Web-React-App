import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import ImageSlider from './Component/ImageSlider';
import Banner from './Component/Banner';
function App() {
  return (
    <>
    
     <Navbar></Navbar>
     <div className='bodycontent'>
     <Sidebar></Sidebar>
     <div className='othercontent'>
      <ImageSlider className="ImageSlider"></ImageSlider>
        <Banner></Banner>
      <div className='c2.2.3'>
      
      </div>
     </div>
     </div>
    </>
  );
}

export default App;
