import React, { useContext } from "react"
import logo from "../../image/logo.png"
import cart from "../../image/cart.png"
import admin from '../../image/admin.png'
import { Link } from "react-router-dom"
import { PAGE_URL } from "../../utils/constants"
import { StoreContext } from "../../context/StoreContect"

export default function Navbar() {

  const {getTotalCartAmount} = useContext(StoreContext)

  return(
    <nav className="bg-white px-[220px] py-[16px] flex items-center justify-between h-[93px] shadow-md shadow-[#F17228]">
      <div className="flex items-center">
        <Link to={PAGE_URL.HOME}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      
      <div className="flex items-center space-x-4 text-lg font-open_sans font-bold gap-[30px] text-[#F17228]">
        <Link to={PAGE_URL.HOME}>
          <span>Home</span>
        </Link>

        <Link to={PAGE_URL.ABOUT}>
          <span>About Us</span>
        </Link>

        <Link to={PAGE_URL.MENU}>
          <span>Menu</span>
        </Link>

        <Link to={PAGE_URL.CART} className="relative">
          <span className={`absolute top-0 right-0 inline-block transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 rounded-full ${getTotalCartAmount() === 0 ? "" : "bg-red-500"}`}></span>
          <img src={cart} alt="cart" />
        </Link>

        <Link to={PAGE_URL.ADMIN}>
          <img src={admin} alt="admin" />
        </Link>

      </div>
    </nav>
  )
}