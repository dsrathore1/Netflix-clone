import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav.jsx";
import "../../Styles/Section1Style.css"

const Section1 = () => {
    const [getStart, setGetStart] = useState("");
    const navigate = useNavigate();
    return (
        <>
            <div className="section1">
                <div className="mainContainer">
                    <Nav />
                    <div className="container">
                        <h1 className="headingLine1">Unlimited movies, TV<br /> shows and more.</h1>
                        <h2 className="headingLine2">Watch anywhere. Cancel anytime.</h2>
                        <h3 className="headingLine3">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="inputContainer">
                            <input type="email" className="emailInput" name="email" value={getStart} onChange={(e) => { setGetStart(e.target.value); console.log(e.target.value); }} required />
                            <label>Email address</label>
                            <button className="getStartedBtn" onClick={() => {
                                navigate("/login");
                            }}> Get Started </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1