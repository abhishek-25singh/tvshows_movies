import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    you will find movies, Tv Shows, people, related videos, similar movies, similar tv shows in Trending, What's Popular and Top rated here. You can search, filter and sort movies, Tv Shows <also className=""></also>
                </div>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/" target="_blank">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                    <a href="https://twitter.com/login?lang=en" target="_blank">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
