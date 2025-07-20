import React from "react";
import ReactDom from "react-dom"
import './css/head.css'

function Header(){
    return(
         <>
         <div className="header">
        <div className="logo">
            <h1>
                S   B
            </h1>

        </div>
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        Professional Summary
                    </li>
                    <li>
                        Experience
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Project
                    </li>
                    <li>
                        Education
                    </li>
                    <li>
                        Achievement & Awards
                    </li>
                </ul>
            </nav>

        </div>

    </div>
    </>
         );
}
export default Header;