import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const UserGender = () => {
  return (
    <div className='gender-body'>
    <div className='gender-content'>Studies have shown that women prioritize their health more than men, 
        confirm if this is true by clicking below
        </div>
        <div>
        <nav>
          <Link to="female" className="user_link">
            View Female Users
          </Link>
          <Link to="male" className="user_link">
            View Male Users
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}
