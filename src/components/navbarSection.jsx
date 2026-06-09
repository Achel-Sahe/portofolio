import React from "react";

const Navbar = () => {
    return (
        <div className="nav-wrapper" data-aos="slide-down" data-aos-duration="1500">
            <nav className="navbar">
                <div className="left-nav">
                    <h1>CHELO</h1>
                </div>
                <div className="right-nav">
                    <a href="#home">
                        <div className="link-nav">HOME</div>
                    </a>
                    <a href="#about">
                        <div className="link-nav">ABOUT</div>
                    </a>
                    <a href="#skills">
                        <div className="link-nav">SKILLS</div>
                    </a>
                    <a href="#project">
                        <div className="link-nav">PROJECT</div>
                    </a>
                    <a href="#contact">
                        <div className="link-nav">CONTACT</div>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
