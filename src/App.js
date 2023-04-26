import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';

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
      <Route path='order-summary' element={<OrderSummary/>}></Route>

      {/* 1. Below is an example of nested routes.
             Path to FeaturedProducts is /products/featured
             Similarly, /products/new 
          2. React Router automatically forms a path when we nest one route inside another. */}

      <Route path='products' element={<Products/>}>
        <Route path='featured' element={<FeaturedProducts/>}></Route>
        <Route path='new' element={<NewProducts/>}></Route>
      </Route>

      {/* When path = '*' --> This route will be used when no other match for a path is found */}
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>

    
    </>
  );
}

export default App;
