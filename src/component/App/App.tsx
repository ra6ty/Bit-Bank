import React from 'react';
import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "../../routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useAuth} from "../../hooks/auth.hook";
import {useDispatch} from "react-redux";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const {token, isReady, login, logout} = useAuth()
    const isLogin = !!token
    const routes = useRoutes(isLogin)

    dispatch({type: "ADD_AUTH_DATA", payload: {token, isReady, login, logout}})

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                {routes}
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
