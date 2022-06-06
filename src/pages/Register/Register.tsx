import React, {useState} from 'react';
import "./Register.scss"
import axios from 'axios';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loader from "../../component/Loader/Loader";

const Register: React.FC = () => {
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [loading,setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const [emailBusy, setEmailBusy] = useState(false)
    const [errorName, setErrorName] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Enter a valid name",
        enabled: false
    })
    const [errorPhone, setErrorPhone] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Enter the correct phone number",
        enabled: false
    })
    const [errorEmail, setErrorEmail] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Enter the correct Email",
        enabled: false
    })
    const [errorPass, setErrorPass] = useState<{
        text?: string,
        enabled: boolean
    }>({
        text: "Enter a valid password that should include '? @ # $% *'",
        enabled: false
    })

    const validationStyle = {
        color: "red",
        boxShadow: "0 0 5px 2px",
        borderRadius: "2px"
    };

    const sendRegister = (): void => {
        setLoading(true)
        setErrorName({...errorName, enabled: false})
        setErrorPhone({...errorPhone, enabled: false})
        setErrorEmail({...errorEmail, enabled: false})
        setErrorPass({...errorPass, enabled: false})

        if (nameValue.length < 3) {
            setErrorName({...errorName, enabled: true})
        }

        let regForPhoone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

        if (!regForPhoone.test(phoneValue)) {
            setErrorPhone({...errorPhone, enabled: true})
        }

        let regForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!regForEmail.test(emailValue)) {
            setErrorEmail({...errorEmail, enabled: true})
        }

        let regForPass = /^[а-яА-ЯёЁa-zA-Z0-9]+$/

        if (!regForPass.test(passValue)) {
            setErrorPass({...errorPass, enabled: true})
            setLoading(false)
            return
        }

        axios.post('https://user-simple.herokuapp.com/auth/registration', {
            fullName: nameValue,
            email: emailValue,
            phone: phoneValue,
            password: passValue,
        })
            .then(function (response) {
                if (response.data.status === "user created") {
                    setShow(true)
                    setEmailBusy(false)
                    setNameValue("")
                    setPhoneValue("")
                    setEmailValue("")
                    setPassValue("")
                    setLoading(false)
                }
                if (response.data.status === "email is used") {
                    setEmailBusy(true)
                    setLoading(false)
                }
            })
    }

    const handleClose = (): void => setShow(false);

    return (
        <div className="register">
            <section className="signin-page account">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration successful!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for trusting us. We will do everything to make you comfortable and pleasant
                        with us
                        work))</Modal.Body>
                </Modal>
                <div className="container">
                    {loading ?  <Loader/> :null}
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="block text-center">
                                <h2 className="text-center">Create Your Account</h2>
                                <form className="text-left clearfix mt-30">
                                    <div className="form-group" style={errorName.enabled ? validationStyle : {}}>
                                        <input type="text" value={nameValue}
                                               onChange={event => setNameValue(event.target.value)}
                                               className="form-control" placeholder="Full Name"/>
                                    </div>
                                    {errorName.enabled ? <span>{errorName.text}</span> : null}
                                    <div className="form-group" style={errorPhone.enabled ? validationStyle : {}}>
                                        <input type="tel" value={phoneValue}
                                               onChange={event => setPhoneValue(event.target.value)}
                                               className="form-control" placeholder="Phone"
                                        />
                                    </div>
                                    {errorPhone.enabled ? <span>{errorPhone.text}</span> : null}
                                    <div className="form-group" style={errorEmail.enabled ? validationStyle : {}}>
                                        <input type="email" value={emailValue}
                                               onChange={event => setEmailValue(event.target.value)}
                                               className="form-control" placeholder="Email"/>
                                    </div>
                                    {errorEmail.enabled ? <span>{errorEmail.text}</span> : null}
                                    <div className="form-group" style={errorPass.enabled ? validationStyle : {}}>
                                        <input type="password" value={passValue}
                                               onChange={event => setPassValue(event.target.value)}
                                               className="form-control" placeholder="Password"/>
                                    </div>
                                    {errorPass.enabled ? <span>{errorPass.text}</span> : null}
                                    <button type="button" onClick={sendRegister}
                                            className="btn btn-main text-center">Sign In
                                    </button>
                                    {emailBusy ? <h5>This email is already taken</h5> : null}
                                </form>
                                <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;