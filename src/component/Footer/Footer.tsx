import React from 'react';
import "./Footer.scss"

const Footer:React.FC = () => {
    return (
        <div className="footer">
            <footer id="footer" className="bg-one">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <h3>INFORMATION</h3>
                                <ul>
                                    <li><a href="#">Payment Option</a></li>
                                    <li><a href="#">Getting Started</a></li>
                                    <li><a href="#">Bitcoin Calculator</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><a href="#">Web Development</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Linkedin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;