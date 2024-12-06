import { BsLightningChargeFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white px-8 lg:px-24">
      <div className="navbar-start w-[40%]">
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
            className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold flex items-center gap-1">
          <span>
            <BsLightningChargeFill />
          </span>
          eLife
        </Link>
      </div>
      <div className="navbar-end w-[60%]">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="flex gap-7">
          <div className="indicator">
            <FaRegHeart size={18} />
            <span className="badge badge-xs indicator-item">8</span>
          </div>
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-xs indicator-item">8</span>
          </div>
        </div>
      </div>
      <div className="ml-7">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="bg-slate-800 p-3 rounded-sm">
              <FaUser size={18} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
            >
              <button
                onClick={handleLogout}
                className="btn h-10 min-h-10 rounded-none flex gap-2"
              >
                Logout <IoIosLogOut size={18}/>
              </button>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn hover:btn-outline h-10 min-h-10 bg-[#F26E21] border-none text-white rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
