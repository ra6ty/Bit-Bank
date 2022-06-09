import React, {useEffect, useState} from 'react';
import "./CryptoPage.scss"
import axios from "axios";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {StoreTypes} from "../../store/reducers/reducers";
import Loader from "../../component/Loader/Loader";

const CryptoPage = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false)
    let [responseCoin, setResponseCoin] = useState({
        currency: "",
        name: "",
        percent_change_1h: "",
        percent_change_7d: "",
        percent_change_24h: "",
        percent_change_30d: "",
        percent_change_60d: "",
        price: "",
        symbol: "",
        topRank: 0,
    })

    const {currency} = useSelector((state: StoreTypes) => state.currency)
    const {token} = useSelector((state: StoreTypes) => state.auth.auth)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://user-simple.herokuapp.com/crypto/otherCurrency`,
            {
                params: {currency, index: params.id},
                headers: {'authorization': token},
            })
            .then((res) => {
                setLoading(false)
                setResponseCoin(res.data.crypto)
            })
    }, [params.id])

    const colorRedStyle = {
        color: "red",
    }
    const colorGreenStyle = {
        color: "green",
    }

    let CoinPercentEmptyArray: [{
        name: string,
        count: string
    }] = [{
        name: "",
        count: ""
    }]

    let CoinPercent: {
        percent_change_1h: string,
        percent_change_7d: string,
        percent_change_24h: string,
        percent_change_30d: string,
        percent_change_60d: string,
    } = responseCoin

    let CoinPercentArray = Object.keys(CoinPercent)
        .map(function (key: string) {
            switch (key) {
                case "percent_change_1h":
                    CoinPercentEmptyArray.push({
                        name: "Change 1 hour",
                        count: CoinPercent[key]
                    })
                    break;
                case "percent_change_24h":
                    CoinPercentEmptyArray.push({
                        name: "Change 24 hour",
                        count: CoinPercent[key]
                    })
                    break;
                case "percent_change_7d":
                    CoinPercentEmptyArray.push({
                        name: "Change 7 days",
                        count: CoinPercent[key]
                    })
                    break;
                case "percent_change_30d":
                    CoinPercentEmptyArray.push({
                        name: "Change 30 days",
                        count: CoinPercent[key]
                    })
                    break;
                case "percent_change_60d":
                    CoinPercentEmptyArray.push({
                        name: "Change 60 days",
                        count: CoinPercent[key]
                    })
                    break;
                default :
                    break
            }
        });

    return (
        <div className="cryptoPage">
            <section className="pricing-table section">
                {loading ? <Loader/> : null}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title text-center">
                                <h2>{responseCoin.name}</h2>
                                <span className="border"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul>
                                <li className="symbol">{responseCoin.symbol}</li>
                                {CoinPercentEmptyArray.map((el: {
                                    name: string,
                                    count: string
                                }) => {
                                    return <li key={el.name}>{el.name}<br/>
                                        <span
                                            style={el.count[0] === "-" ? colorRedStyle : colorGreenStyle}>{el.count}%</span>
                                    </li>
                                })}
                            </ul>
                            {loading ? <Loader/> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Prise now : <span>{responseCoin.price}</span>{responseCoin.currency}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CryptoPage;