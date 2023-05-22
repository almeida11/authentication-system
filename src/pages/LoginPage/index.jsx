import React, { useState } from "react";
import "./styles.css";
import logo from "./assets/logo.png"

//Login Page - Auth
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submite", { email, pass });
    };
    return (
        <div id="login" className="login">
            <form className="formLogin" onSubmit={handleSubmit}>
                <img className="logo-bug" src={logo} alt="logo" />
                <div className="input-section">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Senha</label>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                    </div>
                </div>
                <div className="actionLogin">
                    <button className="btn-login" type="submit">Entrar</button>
                </div>
                <div className="actionRegister">
                    <span>Ainda não possui um login?</span>
                    <button className="btn-register" type="submit">Registrar-se</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
