import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";

export const useRoutes = () => {
    const isAuth: boolean = false;

    if (isAuth) {
        return (
            <Routes>
                <Route path="/" element={< Main/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={< Register/>}/>
            </Routes>
        )
    }
}

