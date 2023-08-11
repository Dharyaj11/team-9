
import React from 'react'; 

const Navbar = () => {
  return (
  
    <div>
    <nav>
      <section className='left'>
      <ul>
        <li><a href="/home">🏠 Home</a></li>
        <li ><a href="/book">📅 Book Appointment</a></li>
        
        <li><a href="/doctor">🙍 Doctors</a></li>
        <li><a href="/hospital">➕ Hospitals & Clinics</a></li>
        
        <li className='right' id='login'><a classname="here" href="/login">LOGIN</a></li>
        <li className='right' id='register'><a classname="here" href="/register">REGISTER</a></li>
      </ul>
      </section>
      
    </nav>

  </div>

  );
};

export default Navbar;    
  




