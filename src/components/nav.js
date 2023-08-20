
import React from 'react'; 

const Navbar = () => {
  return (
  
    <div>
    <nav>
      <section className='left'>
      <ul>
        <li><a href="/">🏠 Home</a></li>
        <li ><a href="/book">📅 Book Appointment</a></li>
        
        <li><a href="/doctor">🙍 Doctors</a></li>
        <li><a href="/hospital">➕ Hospital</a></li>
        
        <li className='right' id='login'><a classname="here" href="/loginn">LOGIN</a></li>
        <li className='right' id='register'><a classname="here" href="/registern">REGISTER</a></li>
      </ul>
      </section>
      
    </nav>

  </div>

  );
};

export default Navbar;    
  




