import React, {useState} from 'react';
import "./Login.scss"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Login = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [errorEmail, setErrorEmail] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Некорекний Email",
        enabled: false
    })
    const [errorAuthorization, setErrorAuthorization] = useState(false)
    const {login, token} = useSelector((state: any) => state.auth)
    const navigate = useNavigate()

    const ErrorStyle = {
        boxShadow: "0 0 5px 2px red",
        borderRadius: "2px"
    };

    const sendLogin = (): void => {

        setErrorEmail({...errorEmail, enabled: false})

        let regForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!regForEmail.test(emailValue)) {
            setErrorEmail({...errorEmail, enabled: true})
            setErrorAuthorization(true)
            return
        }

        axios.post('https://user-simple.herokuapp.com/auth/login', {
            email: emailValue,
            password: passValue
        })
            .then(function (response) {
                if (response.data.token) {
                    login(response.data.token)
                    setErrorAuthorization(false);
                    navigate("/")
                }

                if (response.data.status === "an incorrect password") {
                    setErrorAuthorization(true)
                }
                if (response.data.status === "user is not defined") {
                    setErrorAuthorization(true)
                }
                setEmailValue("")
                setPassValue("")

            })
    }

    return (
        <div className="login">
            <section className="signin-page account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="block">
                                <h2 className="text-center">Sign In to BitBank</h2>
                                <form className="text-left clearfix mt-50" action="index.html">
                                    <div className="form-group">
                                        <input type="email" style={errorAuthorization ? ErrorStyle : {}}
                                               value={emailValue} onChange={event => setEmailValue(event.target.value)}
                                               className="form-control" placeholder="Email"/>
                                        {errorEmail.enabled ? <span>{errorEmail.text}</span> : null}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" style={errorAuthorization ? ErrorStyle : {}}
                                               value={passValue} onChange={event => setPassValue(event.target.value)}
                                               className="form-control" placeholder="Password"/>
                                        {errorAuthorization ? <span>Неправальний пароль або лоін</span> : null}
                                    </div>

                                    <button type="button" onClick={sendLogin} className="btn btn-main">Sign In</button>
                                </form>
                                <p>New in this site? <Link to="/register">Create New Account</Link></p>
                                <p><a href="#"> Forgot your password?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;