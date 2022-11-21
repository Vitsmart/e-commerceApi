
import './App.css';
import { Home } from './pages/Home';
import {
  
  Route,
  Navigate,
  Routes,
  
} from "react-router-dom";
// import './components/main.scss'
 import  {Cart}  from './pages/Cart';
 import {Login}  from './pages/Login';
 import  {ProductList}  from './pages/ProductList';
 import {Product}  from './pages/Product';
import  {Register}  from './pages/Register';
import Success from './pages/Success';
import { useSelector } from 'react-redux';




function App() {
  const user = useSelector((state) => state.user.currentUser);
  return(
    
    <Routes>
       
          <Route path="/" element={<Home />}/>
            
          
          <Route path="/products/:category" element={<ProductList />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/sucess" element={<Success/>}/>
          <Route path="/login" element={ user? <Navigate to="/"/> : <Login/>}/>
          <Route path="/register" element={user? <Navigate to="/"/> : <Register/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          
    </Routes>
      
  )
}

export default App;
