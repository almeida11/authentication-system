import React, {useState} from "react";
import "./styles.css";

//Login Page - Auth
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submite", {email, pass});
    };
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className="actionLogin">
                    <button type="submit">Entrar</button>
                </div>
                <div className="actionRegister">
                    <button type="submit">Registrar-se</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
