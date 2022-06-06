import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import NotFound from "./pages/notFound/notFound";

export const useRoutes = (isAuth: boolean) => {

    if (isAuth) {
        return (
            <Routes>
                <Route path="/" element={< UserPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        )
    } else {
        return (
            <Routes>
                <Route path="/" element={< Main/>}/>
                <Route path="/register" element={< Register/>}/>
                <Route path="/login" element={< Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        )
    }
}

