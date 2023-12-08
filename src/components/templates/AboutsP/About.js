import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

function About() {
    return (
        <div className="m-about">
            <Header />
                <div className="m-about-content">
                    <h1>This is About Page</h1>
                </div>
            <Footer />
        </div>
    )
}

export default About;