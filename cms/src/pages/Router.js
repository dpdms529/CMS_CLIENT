import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Manage from "./Manage";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Header from "../components/Header";

function Router() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const loginStatus = sessionStorage.getItem("isLogin");
        if (loginStatus === null) {
            console.log('session isLogin is null');
        } else {
            setIsLogin(true);
            console.log('session isLogin is set to true');
        }
    }, []);

    return (
        <div>
            <Header isLogin={isLogin}></Header>
            <Routes>
                <Route path="/" element={<Home />} exact></Route>
                <Route path="/manage" element={<Manage id={1} />}></Route>
                <Route path="/simulation" element={<Manage id={2} />}></Route>
                <Route path="/logIn" element={<LogIn />} exact></Route>
                <Route path="/signUp" element={<SignUp />} exact></Route>
            </Routes>
        </div>
    );
}

export default Router;
