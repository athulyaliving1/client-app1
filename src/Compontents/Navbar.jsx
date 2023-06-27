import React from "react";
import { connect } from 'react-redux';
import {logout} from "../features/userAction"
import { useNavigate,Link } from "react-router-dom";


const Navbar = ({logout}) => {
     const navigate = useNavigate();

  
  const handleLogout = () => {
    logout();
   navigate("/");
  };




  return (
    <nav className="bg-white border-gray-200 mx-2 px-2 py-2.5 rounded ">
      <header>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, Barry!
              </h1>

              <p class="mt-1.5 text-sm text-gray-500">
                Let's write a new blog post! 🎉
              </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link to="/">  
              <button onClick={handleLogout}
                class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Log out
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(Navbar);