import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'


import Home from "./routes/Home";
import Login from "./routes/Login";
import Loading from "./routes/Loading";



const AppRoutes = () => {

    const token = localStorage.getItem("token")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Loading />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;