import React from 'react';
import "./Main.scss"


const Main: React.FC = () => {

    const heroAreaStyle = {
        background: "linear-gradient( rgba(255, 255, 255, 0.01),rgba(0, 0, 0, 0.7) ), url(./images/slider-bg-2.jpg)"
    };

    return (
        <div className="Main">
            <section className="hero-area" style={heroAreaStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center mb-4 mb-lg-0">
                            <div className="video-player">
                                <iframe src="https://www.youtube.com/embed/MJGqmleOxLk"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block">
                                <h2>Bitcoin is a remarkable cryptographic achievement</h2>
                                <p>The ability to create something which is not duplicable in the digital world has
                                    enormous value…Lot’s of people will build businesses on top of that.</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn btn-main">Explore Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>$50B+</span>
                                <p>Bitcoin Served</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>10M+</span>
                                <p>Server Build</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item">
                                <span>68</span>
                                <p>Countries Supported</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-3">
                            <div className="counters-item kill-border">
                                <span>10B</span>
                                <p>Active Treades</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;