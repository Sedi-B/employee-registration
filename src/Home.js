


import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  
  return (
<div className='Home'>



<h1>WELCOME TO EMPLOYEE REGISTRATION PORTAL</h1>
<p>On this portal an admin will be able to: <br></br> <b>Add employee</b><br></br><br></br>
 <b> Update employee details</b><br></br><br></br><b> Delete the employee from the list</b>
 <br></br><br></br><b> You can also Search for the employee</b></p>

 <footer className="footer">
     @.Phoshoko RR
    </footer>
<Link to="/home" ><button className='but'>Go to Form</button></Link>
</div>


  );
}

export default Home;
