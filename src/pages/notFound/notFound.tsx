import React from 'react';
import "./noFound.scss"
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <section className="page-404 section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <p>Sorry, but the page you were trying to view does not exist.</p>
                            <Link to="/" className="btn btn-main mt-20">Go Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;