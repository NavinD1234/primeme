// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <Link to="/">Your Logo</Link>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/categories">Categories</Link></li>
//         <li><Link to="/live-tv">Live TV</Link></li>
//         <li><Link to="/search">Search</Link></li>
//         <li>
//           <div className="user-icon">
//             <span>User</span>
//             <ul className="user-dropdown">
//               <li><Link to="/login">Login</Link></li>
//               <li><Link to="/logout">Logout</Link></li>
//               <li><Link to="/subscriptions">Subscriptions</Link></li>
//             </ul>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
// import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-brand">
     <Link to="/">   <img src="/image/logo.png" alt="logo" className='logo'  style={{ width:"150px",marginLeft:"12px" }}  /></Link>
      </div>
      <div className="navbar-menu">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/filter">Search Hall</Link>  </li>
          <li> <Link to="/bloglist">Blogs</Link>  </li>
          <li> <Link to="/contact">Contact</Link>  </li>
          {/* <li> <button type="button" class="btn btn-primary" style={{ marginTop:"-8px" }}>Join As a Vendor</button> </li>
           */}
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
