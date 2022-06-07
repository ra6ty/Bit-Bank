import React, {useState} from 'react';
import "./ChangeDataProfile.scss"
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";
import axios from "axios";
import {Modal} from "react-bootstrap";

const ChangeDataProfile = () => {
    const [nameFromInput, setNameFromInput] = useState("")
    const [oldPasswordFromInput, setOldPasswordFromInput] = useState("")
    const [newPasswordFromInput, setNewPasswordFromInput] = useState("")
    const [show, setShow] = useState(false);
    const {token} = useSelector((state: StoreTypes) => state.auth.auth)
    const [modalNameSuccess, setModalNameSuccess] = useState(false)
    const [modalPasswordSuccess, setModalPasswordSuccess] = useState(false)
    const [passwordValidation, setPasswordValidation] = useState(false)
    const [incorrectPasswordValidation, setIncorrectPasswordValidation] = useState(false)
    const [nameValidation, setNameValidation] = useState(false)

    const changePassword = ():void => {
        let validationForPass = /^[а-яА-ЯёЁa-zA-Z0-9]+$/

        if (!validationForPass.test(newPasswordFromInput)) {
            axios.post(`https://user-simple.herokuapp.com/auth/changeAccountPassword`, {
                "oldPassword": oldPasswordFromInput,
                "newPassword": newPasswordFromInput
            }, {
                headers: {
                    'authorization': token
                },
            })
                .then(res => {
                    if (res.data.status === "ok") {
                        setShow(true)
                        setOldPasswordFromInput("")
                        setNewPasswordFromInput("")
                        setModalPasswordSuccess(true)
                        setPasswordValidation(false)
                        setIncorrectPasswordValidation(false)
                    }
                    if (res.data.status === "an incorrect old password") {
                        setOldPasswordFromInput("")
                        setNewPasswordFromInput("")
                        setPasswordValidation(true)
                        setIncorrectPasswordValidation(false)
                    }
                })
        } else {
            setIncorrectPasswordValidation(true)
        }
    }

    const changeName = ():void => {
        if (nameFromInput.length > 3) {
            axios.post(`https://user-simple.herokuapp.com/auth/changeAccountName`, {
                "name": nameFromInput
            }, {
                headers: {
                    'authorization': token
                },
            })
                .then(res => {
                    if (res.data.status === "ok") {
                        setShow(true)
                        setNameFromInput("")
                        setModalNameSuccess(true)
                        setNameValidation(false)
                    }
                })
        } else {
            setNameValidation(true)
        }
    }

    const validationStyle = {
        color: " #2B2B31",
        boxShadow: "0 0 5px 2px rgb(361, 40, 0)",
        borderRadius: "2px"
    };

    const handleClose = (): void => setShow(false);

    return (
        <div className="changeDataProfile">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalNameSuccess ? "Success" : null}
                        {modalPasswordSuccess ? "Success" : null}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalNameSuccess ? "Your name changed!" : null}
                    {modalPasswordSuccess ? "Your Password changed!" : null}
                </Modal.Body>
            </Modal>
            <section className="team section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Change Account Data</h2>
                            <span className="border"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Change Account Name</h3>
                        <input type="text" value={nameFromInput} style={nameValidation ? validationStyle : {}}
                               onChange={event => setNameFromInput(event.target.value)}
                               className="form-control mt-4" placeholder="New Account Name"/>
                        <button type="button" onClick={changeName} className="btn btn-main btm-changeDataProfile">Change
                            Name
                        </button>
                        {nameValidation ? <p className="validation">Enter a valid name</p> : null}
                    </div>
                    <div className="col-md-6">
                        <h3>Change Account Password</h3>
                        <input type="password" value={oldPasswordFromInput}
                               style={passwordValidation || incorrectPasswordValidation ? validationStyle : {}}
                               onChange={event => setOldPasswordFromInput(event.target.value)}
                               className="form-control mt-4" placeholder="Old Password"/>
                        <input type="password" value={newPasswordFromInput}
                               style={passwordValidation || incorrectPasswordValidation ? validationStyle : {}}
                               onChange={event => setNewPasswordFromInput(event.target.value)}
                               className="form-control mt-3" placeholder="New Password"/>
                        <button type="button" onClick={changePassword}
                                className="btn btn-main btm-changeDataProfile">Change Password
                        </button>
                        {passwordValidation ? <p className="validation">Passwords not converge</p> : null}
                        {incorrectPasswordValidation ? <p className="validation">Incorrect new password</p> : null}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChangeDataProfile;