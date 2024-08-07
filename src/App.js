import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
function App() {
  return (
    <>
    
     <Navbar></Navbar>
     <div className='bodycontent'>
     <Sidebar></Sidebar>
     </div>
    </>
  );
}

export default App;
