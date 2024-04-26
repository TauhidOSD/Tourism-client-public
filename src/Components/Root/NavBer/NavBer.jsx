import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBer = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
      logout()
        .then(() => {
          Swal.fire({
            title: "success!",
            text: "Logout Succesfull",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };


    const links = (
        <>
          <li className="mr-3">
            <NavLink to="/">Home</NavLink>
          </li>
    
          <li>
            <NavLink to="/Profile">User Profile</NavLink>
          </li>
          <li className="ml-3">
            <NavLink to="/GoogleMap">Google Map</NavLink>
          </li>
        </>
      );
    return (
        <div>
         <div className="navbar bg-base-100 lg:p-8 md:px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl md:text-4xl font-bold  ">
          Indrusto
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex">
        <label className="mr-5">
          {user && (
            <div
              className="tooltip  tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                style={{ width: "50px" }}
                className="w-50 rounded-full circle"
                src={user?.photoURL}
              />
            </div>
          )}
        </label>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-error text-white font-bold"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline btn-error text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
        </div>
    );
};

export default NavBer;