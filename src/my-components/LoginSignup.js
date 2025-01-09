import React from 'react';
import { useState } from 'react'
import email_icon from '../Assests/email_icon.png';
import user_icon from '../Assests/user_icon.png';
import padlock from '../Assests/padlock.png';

function LoginSignup({ onSuccess }) {
    const [action, setAction] = useState("Sign Up");

    // Handler for form submission
    const handleSubmit = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = action === "Sign Up" ? document.getElementById("username").value : null;

        // Validation
        if (action === "Sign Up" && (!username || username.trim() === "")) {
            alert("Username is required.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // API request
        const endpoint = action === "Sign Up" ? "https://the-look-backend-app2.vercel.app/api/signup" : "https://the-look-backend-app2.vercel.app/api/login";

        const payload = { email, password, ...(username && { username }) };

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`${action} successful!`);
                onSuccess();
            } else {
                alert(result.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to connect to the server.");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input id="username" type="text" placeholder="Name" />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input id="email" type="email" placeholder="Email" required />
                </div>

                <div className="input">
                    <img src={padlock} alt="Padlock Icon" />
                    <input id="password" type="password" placeholder="Password" required />
                </div>

                {action === "Sign Up" ? (
                    <div className="forgot-password">
                        <input className="checkbox" type="checkbox" required />
                        <span>Agree to Terms and Conditions</span>
                        <button className="submit-btn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                ) : (
                    <div className="forgot-password">
                        Forgot password? <span>Click Here</span>
                        <button className="submit-btn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                )}

                <div className="submit-container">
                    <div
                        className={action === "Login" ? "submit gray" : "submit"}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === "Sign Up" ? "submit gray" : "submit"}
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LoginSignup;