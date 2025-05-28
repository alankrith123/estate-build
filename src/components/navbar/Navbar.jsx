import { useState } from "react";
import "./Navbar.scss";
function Navbar() {
    const [open, setOpen] = useState(false);
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
                <a href="/">Signin</a>
                <a href="/" className="register">SignUp</a>
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