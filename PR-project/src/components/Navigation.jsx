import { NavLink } from "react-router-dom"
import ProfileIcon from "../assets/icons/register.svg?react"

export const Navigation = () => {
  return (
    <nav className="navbar container h-100">
      <div className="nav-menu d-flex text-uppercase ">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/sd">
          discover
        </NavLink>
        <NavLink className="header-link" to="/marketplace">
          marketplace
        </NavLink>
      </div>
      <div className="nav-account">
        <NavLink className="account-link" to="/account">
          <ProfileIcon />
        </NavLink>
      </div>
    </nav>
  )
}