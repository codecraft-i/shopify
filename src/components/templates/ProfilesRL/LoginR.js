import React from "react";
import './login_r.css'

function LoginR() {
    function LogRCancel() {
        let mainLRBox = document.querySelector(".mainLR-box");

        mainLRBox.classList.remove("loginRActive");
    }
    return (
        <div className="mainLR-box">
            <div className="login_r-box">
                <div className="exit-r-l" onClick={ LogRCancel }><i class='bx bx-plus'></i></div>
                <div>
                <h2>Enter the phone number. A verification code will be sent via SMS.</h2>
                <form id="registrationForm" method="GET">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="(**) *** ** **" pattern="998[0-9]{9}" maxLength={9} required />
                    <label htmlFor="verificationCode">Confirmation code:</label>
                    <input type="number" id="verificationCode" name="verificationCode" placeholder="6 digit number" maxLength={6} step="" required />
                    <button type="button" onclick="sendVerificationCode()">Get the code</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default LoginR;