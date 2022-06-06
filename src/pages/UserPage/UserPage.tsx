import React, {useEffect, useState} from 'react';
import "./UserPage.scss"
import axios from "axios";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";
import Loader from "../../component/Loader/Loader";

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
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://user-simple.herokuapp.com/auth/getAccountInformation`, {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                setLoading(false)
                if (res.data.status === "error") {
                    setRequestError(true)
                    return
                }
                setUserProfileData(res.data)
            })
    }, [])

    return (
        <div className="userPage">
            {loading ?  <Loader/> :null}
            <section className="team section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {!loading ? <div className="title text-center">
                                <h2>Our Account</h2>
                                <span className="border"></span>
                            </div> :null}
                        </div>
                    </div>
                    <div className="row">
                        {requestError
                            ? <div className="col-md-12 text-center page-404">
                                <h1>404</h1>
                                <h2>Page Not Found</h2>
                                <p>Sorry, there are technical issues, please try again later</p>
                            </div>
                            : null}
                        {userProfileData.fullName.length > 1 ?
                            <div className="member col-md-12">
                                <p><span>Name:</span> {userProfileData?.fullName}</p>
                                <p><span>Email:</span> {userProfileData?.email}</p>
                                <p><span>Phone:</span> {userProfileData?.phone}</p>
                                <p><span>Date of registration:</span> {userProfileData?.dc.split("", 10)}</p>
                            </div> : null
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserPage;