import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    // Within the routes component, we define the individual routes
    // Thus, Routes is the parent component of the Route component
    <>
    {/* Navbar: Utilizes the routes defined above to provide clickable links*/}
    <Navbar></Navbar>
    
    <Routes>
      {/* Route has 2 props: path and element
          1. Path --> the destination to which we should be directed; for root element it is '/'
          2. Element --> the component that should be rendered when the path matches; in this case, the 'Home' component  
      */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
    </Routes>

    
    </>
  );
}

export default App;
