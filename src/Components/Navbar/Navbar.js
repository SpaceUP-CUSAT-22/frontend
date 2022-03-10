import "./Navbar.css";
import spaceup_logo from "../../Assets/space_up_logo_1.svg";

const Navbar = () => {
    return(
        <>
            <nav className="navbar-parent">
                <img src={spaceup_logo} className="nav-logo" />
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Speakers</li>
                    <li>Team</li>
                    <li>Partnership</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;