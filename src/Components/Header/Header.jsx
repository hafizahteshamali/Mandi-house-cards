import { NavLink } from "react-router-dom"
import "./Header.css";
import Modal from "../Common/Modal/Modal";
import "./Responsive.css";

const Header = () => {
  return (
    <>
    <section className="header">
      <div className="container">
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <NavLink to="/"><img src="./assets/images/mandi-house-logo.png" alt="" /></NavLink>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/specialties">Specialties</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactUs">Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Header
