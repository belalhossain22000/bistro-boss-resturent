import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Proider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [cart] = useCart()
  console.log(cart)
  const handlesignOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err.message))
  }
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link>CONTACT us</Link>
        <Link>DASHBOARD</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/salad">Our Shop</Link>
        <Link to="/dashboard/mycart">
          <button className=" flex gap-2">
            <FaShoppingCart />
            <span className="badge badge-secondary">+{cart.length}</span>
          </button></Link>
        {user ?
          <Link onClick={handlesignOut}>SIGN OUT</Link> : <Link to="/login">LogIn</Link>}
        <Link>Profile</Link>
        <Link to="secret">secret</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black opacity-50 fixed z-10 max-w-screen-xl text-white">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className="text-2xl">Bistro Boss</span> <br /> Resturent</a>
        </div>
        <div className="navbar-center  bg-black opacity-50 text-white hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
