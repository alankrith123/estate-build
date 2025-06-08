import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const user= true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>AlanEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>BenDover</span>
                    <Link className="profile" to="/profile">
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div> : <><a href="/">Signin</a>
                <a href="/" className="register">SignUp</a></>}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <img src="/close.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contacts</a>
                    <a href="/">Agents</a>
                    <a href="/">Signin</a>
                    <a href="/" className="register">SignUp</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;