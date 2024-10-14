import React from "react";
import App from "./App";
import Login from "./users/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from "./users/Signup";

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/main" element={<App />}/>
            <Route path="/" element={<Login />}/>
            <Route path="/Signup" element={<Signup />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;