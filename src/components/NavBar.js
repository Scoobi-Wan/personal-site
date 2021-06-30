import React, { Component } from 'react';
import "./navBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <h1 id="myName">Paul Rich</h1>
                <ul className="PAC">

                    <li><div className="Projects">
                        Projects
                    </div></li>
                    <li><div className="About">
                        About
                    </div></li>
                    <li><div className="Contact">
                        Contact
                    </div></li>
                </ul>
                    
                <ul className="Socials">
                <li><div className="Github">
                        <a href="https://github.com/Scoobi-Wan" target="_blank"
                        className="profile-link"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/></a>
                    </div></li>
                    <li><div className="LinkedIn">
                        <a href="https://github.com/Scoobi-Wan" target="_blank"
                        className="profile-link"><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/></a>
                    </div></li>
                    <li><div className="Codepen">
                        <a href="https://github.com/Scoobi-Wan" target="_blank"
                        className="profile-link"><img src="https://i0.wp.com/blog.codepen.io/wp-content/uploads/2012/06/Button-White-Small.png?resize=125%2C125&ssl=1"/></a>
                    </div></li>
                </ul>


            </div>
        )
    }
}
