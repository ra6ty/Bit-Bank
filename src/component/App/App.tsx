import React from 'react';
import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "../../routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App:React.FC = () => {

    const routes = useRoutes()

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
