import React, {useEffect, useState} from 'react';
import "./UserPage.scss"
import axios from "axios";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";

const UserPage: React.FC = () => {

    let [userProfileData, setUserProfileData] = useState({
            email: '',
            dc: '',
            fullName: '',
            phone: '',
        }
    )
    let [requestError, setRequestError] = useState(false)

    const {token} = useSelector((state: StoreTypes) => state.auth.auth)


    useEffect(() => {

        axios.get(`https://user-simple.herokuapp.com/auth/getAccountInformation`, {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                if (res.data.status === "error") {
                    setRequestError(true)
                    return
                }
                setUserProfileData(res.data)

                console.log(res.data)
            })
    }, [])


    return (
        <div className="userPage">
            <section className="team section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h2>Our Account</h2>
                                <span className="border"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="member col-md-6">
                            <h3>Name:{userProfileData?.fullName}</h3>
                            <p>Email:{userProfileData?.email}</p>
                            <p>Phone:{userProfileData?.phone}</p>
                            <p>Date of registration:{userProfileData?.dc}</p>
                        </div>
                        <div className="member video col-md-6">
                            <div className="video-player">
                                <iframe src="https://www.youtube.com/embed/MJGqmleOxLk"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserPage;