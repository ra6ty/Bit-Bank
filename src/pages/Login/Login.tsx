import React, {useState} from 'react';
import "./Login.scss"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";
import Loader from "../../component/Loader/Loader";

const Login = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [loading,setLoading] = useState(false)
    const [errorEmail, setErrorEmail] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Invalid Email",
        enabled: false
    })
    const [errorAuthorization, setErrorAuthorization] = useState(false)
    const {login} = useSelector((state: StoreTypes) => state.auth.auth)
    const navigate = useNavigate()

    const errorStyle = {
        boxShadow: "0 0 5px 2px red",
        borderRadius: "2px"
    };

    const sendLogin = (): void => {
        setLoading(true)
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
                setLoading(false)
            })
    }

    return (
        <div className="login">
            <section className="signin-page account">
                <div className="container">
                    {loading ?  <Loader/> :null}
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="block">
                                <h2 className="text-center">Sign In to BitBank</h2>
                                <form className="text-left clearfix mt-50">
                                    <div className="form-group">
                                        <input type="email" style={errorAuthorization ? errorStyle : {}}
                                               value={emailValue} onChange={event => setEmailValue(event.target.value)}
                                               className="form-control" placeholder="Email"/>
                                        {errorEmail.enabled ? <span>{errorEmail.text}</span> : null}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" style={errorAuthorization ? errorStyle : {}}
                                               value={passValue} onChange={event => setPassValue(event.target.value)}
                                               className="form-control" placeholder="Password"/>
                                        {errorAuthorization ? <span>Invalid password or loin</span> : null}
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