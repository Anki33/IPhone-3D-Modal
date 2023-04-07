import React from "react";
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'
function Nav() {
    return (<nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
                <li>
                    <img src={Logo} alt="apple "></img>
                </li>
                <li>
                    <a className="link-styled">store</a>
                </li>
                <li>
                    <a className="link-styled">Mac</a>
                </li>
                <li>
                    <a className="link-styled">ipad</a>
                </li>
                <li>
                    <a className="link-styled">iphone</a>
                </li>
                <li>
                    <a className="link-styled">Air Pods</a>
                </li>
                <li>
                    <a className="link-styled">TV & Home </a>
                </li>
                <li>
                    <a className="link-styled">Entertainment </a>
                </li>
                <li>
                    <a className="link-styled">Accessories </a>
                </li>
                <li>
                    <a className="link-styled">Support </a>
                </li>
                <li>
                    <img src={Search} alt="apple "></img>
                </li>
                <li>
                    <img src={Store} alt="Store "></img>
                </li>

            </ul>
        </div>
    </nav>);
}

export default Nav;