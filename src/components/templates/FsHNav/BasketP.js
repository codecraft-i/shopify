import React from "react";

import Header from "../Home/Header";
import Footer from "../Home/Footer";

function BasketP() {
    return (
        <div className="main-basket-contents">
            <Header />
                <div className="basket-products">
                    <h1>This is Basket Products Page</h1>
                </div>
            <Footer />
        </div>
    )
}

export default BasketP;