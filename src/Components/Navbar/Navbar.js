import "./Navbar.css";
import "./Navbar_mob.css";
import spaceup_logo from "../../Assets/space_up-logo.png";
import {useEffect, useState} from "react";


const Navbar = () => {
    const [state, setState] = useState(true);
    const [size, setSize] = useState(true);
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

        window.addEventListener("resize", () => {
            if (window.innerWidth < 1182) {
                setSize(true);
            }
            else {
                setSize(false);
            }
        });
        }, []);
    
    return(
        <>
            <nav className={(state) ? "navbar-parent" : "navbar-parent navbar-scrolled"}>
                <img src={spaceup_logo} className="nav-logo" alt=""/>
                <ul className="nav-links">
                    <Items/>
                </ul>
            </nav>

            <div className="sidebar_main" style={{overflowY: "scroll", display: (size) ? "block" : "none"}}>
                <ul className={(size) ? "side-items" : ""}>
                    <Items/>
                </ul>
            </div>
        </>
    );
}

const Items = () => {
    return (
        <>
            <li>Home</li>
            <li>About</li>
            <li>Speakers</li>
            <li>Team</li>
            <li>Partnership</li>
            <li>Contact us</li>
        </>
    )
}

export default Navbar;