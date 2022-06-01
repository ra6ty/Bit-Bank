import React from 'react';
import "./Register.scss"

const Register:React.FC = () => {
    return (
        <div className="register">
            <section className="signin-page account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="block text-center">
                                <h2 className="text-center">Create Your Account</h2>
                                <form className="text-left clearfix mt-30" action="index.html">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-main text-center">Sign In</button>
                                </form>
                                <p className="mt-3">Already have an account ?<a href="#"> Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;