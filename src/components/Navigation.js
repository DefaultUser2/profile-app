import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <div>
            <NavLink to="/">Login</NavLink>
            </div>
            <div>
            <NavLink to="/home">Home</NavLink>
            </div>
            <div>
          <NavLink to="/profile">Profile</NavLink>
         </div> 
       </div>
    );
}
 
export default Navigation;