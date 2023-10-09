import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Index from './Pages/Index';
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import Register from "./Pages/Register";
import Loginnew from "./Pages/Logindata";
import UpdatePassword from "./Pages/UpdatePassword";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Index />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:movieId" element={<Details />} /> {/* Ensure Details component is correctly passed */}
     
         <Route path="/loginnew" element={<Loginnew />} />

         <Route path="/update_password" element={<UpdatePassword />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;


