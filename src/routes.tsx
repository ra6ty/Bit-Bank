import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";

export const useRoutes = () => {
    const isAuth: boolean = true;

    if (isAuth) {
        return (
            <Routes>
                <Route path="/" element={< Main/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={< Main/>}/>
            </Routes>
        )
    }
}

