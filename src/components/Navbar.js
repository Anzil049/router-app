import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className="nav-link">
                Home
            </NavLink>

            <NavLink to="/projects" className="nav-link">
                Projects
            </NavLink>

            <NavLink to="/contact" className="nav-link">
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;
