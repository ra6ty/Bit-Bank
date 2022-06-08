import React, {useEffect, useState} from 'react';
import "./Cryptocurrencies.scss"
import axios from "axios";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";
import {Modal} from "react-bootstrap";
import Loader from "../../component/Loader/Loader";

const Cryptocurrencies: React.FC = () => {
    const [currency, setCurrency] = useState("USD")
    let [responseCryptocurrency, setResponseCryptocurrency] = useState([{id: '', name: '', symbol: '', price: ''}])
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    const {token} = useSelector((state: StoreTypes) => state.auth.auth)

    const changeCurrency = (cur: string):void => {
        setCurrency(cur)
    }

    const checkedCurrency = {
        background: "#31BB9E",
        color: "white",
        borderRadius: "0"
    };

    useEffect(() => {
        setLoading(true)
        axios.get(`https://user-simple.herokuapp.com/crypto/list`,
            {
                params: {currency},
                headers: {'authorization': token}
            })
            .then(res => {
                if (res.data.list.length > 3) {
                    setResponseCryptocurrency(res.data.list)
                    setLoading(false)
                } else {
                    setShow(true)
                    setLoading(false)
                }
            })
    }, [currency])

    const handleClose = (): void => setShow(false);

    return (
        <div className="cryptocurrencies">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>An error has occurred :(</Modal.Title>
                </Modal.Header>
                <Modal.Body>The server is temporarily unavailable</Modal.Body>
            </Modal>
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h4>Easy Pricing</h4>
                                <h2>Pricing.</h2>
                                <span className="border"></span>
                                <h5>Choose the currency in which you want to receive the cryptocurrency rate</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="nav nav-pills mb-6 pricing-tab justify-content-center" id="pills-tab"
                                role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={currency === "USD" ? checkedCurrency : {}}
                                       onClick={() => changeCurrency("USD")}>USD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={currency === "UAH" ? checkedCurrency : {}}
                                       onClick={() => changeCurrency("UAH")} href="#">UAH</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={currency === "EUR" ? checkedCurrency : {}}
                                       onClick={() => changeCurrency("EUR")} href="#">EUR</a>
                                </li>
                            </ul>
                            {loading ? <Loader/> : null}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content">
                                <div className="tab-pane fade show active"
                                     aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        {responseCryptocurrency.length > 3 ? responseCryptocurrency.map((el) => {
                                            return <div key={el.id} className="col-md-4 col-sm-6 col-xs-12">
                                                <div className="pricing-item">
                                                    <h3>{el.symbol}</h3>
                                                    <div className="pricing-body">
                                                        <div className="price">
                                                            {currency === "USD" ? <span> <p>$</p> </span> :
                                                                currency === "UAH" ? <span> <p>₴</p> </span> :
                                                                    currency === "EUR" ? <span><p>€</p> </span> : null}
                                                            <span>{el.price}</span>
                                                        </div>
                                                        <div className="progress" data-percent="45%">
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <p>{el.name}</p>
                                                        <a className="btn btn-main" href="#">Buy</a>
                                                    </div>
                                                </div>
                                            </div>
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cryptocurrencies;