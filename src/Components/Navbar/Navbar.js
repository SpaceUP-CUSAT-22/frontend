import "./Navbar.css";
import spaceup_logo from "../../Assets/space_up-logo.png";
import {useEffect, useState} from "react";


const Navbar = () => {
    const [state, setState] = useState(true);
    useEffect(() => { 
        window.addEventListener("scroll", () => {
            window.onscroll = function() {
                if (window.pageYOffset > 20) {
                    setState(false);
                } else {
                    setState(true);
                }
            };
        });
        }, []);
    
    return(
        <>
            <nav className={(state) ? "navbar-parent" : "navbar-parent navbar-scrolled"}>
                <img src={spaceup_logo} className="nav-logo" alt=""/>
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