import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1 className="header__title">Choice Theme</h1>
        <div className="navbar__logo">
            {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="navbar__links">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/characters">Characters</Link>
            </li>
            <li>
                <Link to="/missions">Mission</Link>
            </li>
            <li>
                <Link to="/roadmap">Road Map</Link>
            </li>
            <li>
                <Link to="/our team">Our Team</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
    }

export default Navbar;