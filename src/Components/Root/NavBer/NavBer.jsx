import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { AuthContext } from "../../../Provider/AuthProvider";


const NavBer = () => {

    const { user, logout } = useContext(AuthContext);

    const [themeControl, setThemeControl] = useState("light");

  const handleThemeControl = () => {
    const newTheme = themeControl === "light" ? "dark" : "light";
    setThemeControl(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
    


  
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
      <li className="mr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/AllTourist">All Tourists Spot</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/AddTourist">Add Tourists Spot</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/myListedPage">My List Page</NavLink>
      </li>
    </>
  );

  return (
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
         Tourist
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

    
     <div  onClick={handleThemeControl}>
     <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
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
            to="/SignIn"
            className="btn btn-outline btn-error text-white font-bold"
          >
            Login
          </Link>
        )}


      </div>
    </div>
  );
};

export default NavBer;
