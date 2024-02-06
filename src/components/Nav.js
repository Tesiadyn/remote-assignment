import React from "react";

function Nav () {
    return(
        <nav>
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <label htmlFor="burger-switch" className="burger-container">
            <div className="burger"></div>
        </label>
        <input type="checkbox" id="burger-switch" />

        <div className="nav-items">
            <label HtmlFor="burger-switch" className="layout-toggle">
                <i className="fa-solid fa-xmark"></i>
            </label>
            <a href="#">
                <div className="nav-item">Item 1</div>
            </a><a href="#">
                <div className="nav-item">Item 2</div>
            </a><a href="#">
                <div className="nav-item">Item 3</div>
            </a><a href="#">
                <div className="nav-item">Item 4</div>
            </a>
        </div>
    </nav>
    );
}
export default Nav;