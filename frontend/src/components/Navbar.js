import React from "react";
import {Link} from "react-router-dom";
//import '../styles/Navbar.css';
import { useAuthentication } from "../auth";


function Navbar() {

    const {isAuthorized, logout} = useAuthentication();

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="navbar">
            <ul className="navbar-menu-right">
                {isAuthorized ? (
                    <li>
                        <Link onClick={handleLogout} to="/logout" className="button-link">Logout</Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="button-link-login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/register" className="button-link">Register</Link>
                        </li>
                    </>
                )}
                
               
            </ul>
        </div>
    );
}
export default Navbar;