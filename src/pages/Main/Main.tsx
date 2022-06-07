import React from 'react';
import "./Main.scss"

const Main: React.FC = () => {

    const heroAreaStyle = {
        background: "linear-gradient( rgba(255, 255, 255, 0.01),rgba(0, 0, 0, 0.7) ), url(./images/main-bg.jpeg)",
        backgroundPosition: "center center"
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
            <section className="about section bg-gray" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 align-self-center mb-4 mb-md-0">
                            <div className="align-self-center">
                                <h2>A New Kind of Digital Currency to change the world what we think</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae deleniti ipsa labore
                                    necessitatibus culpa veritatis quo accusantium, neque enim ea ad eaque iure, quas
                                    tempore velit, quibusdam dolor illo! Explicabo.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quisquam maiores
                                    iste soluta, nihil dolorem?</p>
                                <a href="#" className="btn btn-main">Learn More</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="bitcoin-graph">
                                <img src="./images/blank.png" alt="bitcoin-graph"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services section-xs" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="./images/icons/bitcoin-safety-shield.png" alt="#"/>
                                </div>
                                <h3>Easy & Secure</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel
                                    id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="service-block text-center">
                                <div className="service-icon text-center">
                                    <img src="./images/icons/bitcoin-exchange.png" alt="#"/>
                                </div>
                                <h3>Instant Exchange</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel
                                    id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 mx-auto">
                            <div className="service-block color-bg text-center">
                                <div className="service-icon text-center">
                                    <img src="./images/icons/bitcoin-network.png" alt="#"/>
                                </div>
                                <h3>Strong Network</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel
                                    id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-2 section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h3>Bitcoin flow</h3>
                                <h2>How It Works</h2>
                                <span className="border"></span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi
                                    itaque, obcaecati atque sit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 p-0">
                            <div className="service-item text-center">
                                <span className="count">1.</span>
                                <h4>Sign Up</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                                    venenatis.</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="service-item text-center">
                                <span className="count">2.</span>
                                <h4>Connect</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                                    venenatis.</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="service-item text-center">
                                <span className="count">3.</span>
                                <h4>Buy Digital Currency</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui
                                    venenatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="call-to-action section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Open account for free and start trading Bitcoins now!</h2>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor,nisi
                                elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
                            <a href="#" className="btn btn-main">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h4>Our untold story</h4>
                                <h2>Bitcoin Knowledge Base.</h2>
                                <span className="border"></span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi
                                    itaque, obcaecati atque sit!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <article className="col-12 col-md-6">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <img className="img-fluid shadow rounded" src="./images/main-bg.jpeg"
                                         alt="Generic placeholder image"/>
                                </div>
                                <div className="post-title">
                                    <h3 className="mt-3"><a href="#">Ten things about Business</a></h3>
                                </div>
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>By</span> <a href="" className="">Jonathon Ive</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>By</span> <span> 15th December 2017</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                        voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus
                                        placeat dolor.</p>
                                </div>
                                <a className="btn btn-main" href="#">Read more</a>
                            </div>
                        </article>
                        <article className="col-12 col-md-6">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <img className="img-fluid shadow rounded" src="./images/main-bg.jpeg"
                                         alt="Generic placeholder image"/>
                                </div>
                                <div className="post-title">
                                    <h3 className="mt-3"><a href="">Something I need to tell you</a></h3>
                                </div>
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>By</span> <a href="" className="">Jonathon Ive</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>By</span> <span> 15th December 2017</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                        felis in faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                        voluptatem accusantium dolorum, maxime eos blanditiis sint enim necessitatibus
                                        placeat dolor.</p>
                                </div>
                                <a className="btn btn-main" href="#">Read more</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;