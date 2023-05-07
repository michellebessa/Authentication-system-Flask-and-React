import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    console.log("This is your token: ", store.token);

    const handleClick = () => {
        actions.login(email, password);
    };

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            navigate("/");
        }
    }, [store.token, navigate]);

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>

            {store.token && store.token !== "" && store.token !== undefined ? (
                "you are logged in with this token" + store.token
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button onClick={handleClick}>Login</button>
                </div>
            )}
        </div>
    );
};