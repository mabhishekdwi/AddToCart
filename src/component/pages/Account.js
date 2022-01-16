
import React from 'react'
import './style.css'

function Account() {
    return (
       <React.Fragment>
     <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="images/image1.png" width="100%"/>
                </div>
                <div className="col-2">
                    <div className="form-container">
                        <div className="form-btn">
                            <span onclick="login()">Login</span>
                            <span onclick="register()">Register</span>
                            <hr id="Indicator"/>
                        </div>

                        <form id="LoginForm">
                            <input type="text" placeholder="Username"/>
                            <input type="passowrd" placeholder="Passowrd"/>
                            <button type="submit" className="btn">Login</button>
                            <a href="">Forgot passowrd</a>
                        </form>

                        <form id="RegForm">
                            <input type="text" placeholder="Username"/>
                            <input type="email" placeholder="Email"/>
                            <input type="passowrd" placeholder="Passowrd"/>
                            <button type="submit" className="btn">Register</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>


       </React.Fragment>
    )
}

export default Account
