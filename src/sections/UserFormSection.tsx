import React from 'react'

const LogInFormSection: React.FC = () => {
    
    const loginSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const signinSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    /*
        Finns inte heller här någon funktionalietet, men det går att logga in genom Postman. Ännu 
        en gång så hann jag inte med att fixa detta. Men min tanke var att man skulle kunna logga 
        in och sedan skulle man få tillgång till en sida där man fick redigera produkter. Men som 
        sagt fanns inte tiden till detta. 
    */
    
    return (
        <section className="user-form">
            <div className="container">
                <form className="log-in-form">
                    <h1>Login</h1>
                    <div className="user-input">
                        <label htmlFor="login_email">E-mail</label>
                        <input type="login_email" id="email" placeholder="Type E-mail..."></input>
                    </div>
                    <div className="user-input">
                        <label htmlFor="login_password">Password</label>
                        <input type="password" id="login_password" placeholder="Type Password..."></input>
                    </div>
                    <div className="user-input">
                        <button type="submit" onClick={loginSubmit} className="btn-theme">LOGIN</button>
                    </div>
                </form>
                <form className="sign-in-form">
                    <h1>Signin</h1>
                    <div className="user-input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="Type first name..."></input>
                    </div>
                    <div className="user-input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Type last name..."></input>
                    </div>
                    <div className="user-input">
                        <label htmlFor="signin_email">E-mail</label>
                        <input type="email" id="signin_email" placeholder="Type E-mail..."></input>
                    </div>
                    <div className="user-input">
                        <label htmlFor="signin_password">Password</label>
                        <input type="password" id="signin_password" placeholder="Type Password..."></input>
                    </div>
                    <div className="user-input">
                        <button type="submit" onClick={signinSubmit} className="btn-theme">REGISTER</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LogInFormSection