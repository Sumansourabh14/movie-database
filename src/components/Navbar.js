import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();
  // console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();

      //Redirect to homepage on successful logout.
      navigate("/");
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className='z-50 flex justify-between items-center px-6 py-4 shadow-xl fixed w-full bg-opacity-40 backdrop-blur-2xl'>
        <Link to="/">
          <h1 className='text-red-600 font-bold uppercase text-4xl cursor-pointer'>
            Netflix
          </h1>
        </Link>

        {user?.email ? (
          <div className='text-white'>
            <Link to="/account">
              <button className='hover:text-red-500'>
                Account
              </button>
            </Link>
            <button onClick={handleLogout} className='px-6 py-2 bg-red-600 ml-8 rounded hover:rounded-lg hover:bg-opacity-70 duration-150'>
              Sign Out
            </button>
          </div>
        ) : (
          <div className='text-white'>
            <Link to="/login">
              <button className='hover:text-red-500'>
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className='px-6 py-2 bg-red-600 ml-8 rounded hover:rounded-lg hover:bg-opacity-70 duration-150'>
                Sign Up
              </button>
            </Link>
          </div>
        )}
    </nav>
  )
}

export default Navbar;