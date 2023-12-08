import React, { Component } from "react";
import '../../../styles/InternalStyle/HomeAll/products_ex.css'

import product1 from '../../../assets/Home/Products/jacket-3.jpg';
import product2 from '../../../assets/Home/Products/jacket-4.jpg';
import product3 from '../../../assets/Home/Products/shirt-1.jpg';
import product4 from '../../../assets/Home/Products/shirt-2.jpg';
import product5 from '../../../assets/Home/Products/jacket-5.jpg';
import product6 from '../../../assets/Home/Products/jacket-6.jpg';
import product7 from '../../../assets/Home/Products/clothes-1.jpg';
import product8 from '../../../assets/Home/Products/clothes-2.jpg';
import product9 from '../../../assets/Home/Products/shoe-2.jpg';
import product10 from '../../../assets/Home/Products/shoe-2_1.jpg';
import product11 from '../../../assets/Home/Products/watch-3.jpg';
import product12 from '../../../assets/Home/Products/watch-4.jpg';
import product13 from '../../../assets/Home/Products/watch-1.jpg';
import product14 from '../../../assets/Home/Products/watch-2.jpg';
import product15 from '../../../assets/Home/Products/party-wear-1.jpg';
import product16 from '../../../assets/Home/Products/party-wear-2.jpg';
import product17 from '../../../assets/Home/Products/jacket-1.jpg';
import product18 from '../../../assets/Home/Products/jacket-2.jpg';
import product19 from '../../../assets/Home/Products/sports-2.jpg';
import product20 from '../../../assets/Home/Products/sports-4.jpg';
import product21 from '../../../assets/Home/Products/shoe-1.jpg';
import product22 from '../../../assets/Home/Products/shoe-1_1.jpg';
import product23 from '../../../assets/Home/Products/shorts-1.jpg';
import product24 from '../../../assets/Home/Products/shorts-2.jpg';

import wRP1 from '../../../assets/Home/Products/w-r-p1.jpg';
import wRP2 from '../../../assets/Home/Products/w-r-p2.jpg';

function Products() {
    function clickMorePro() {
        let mainMoreBut = document.querySelector(".visible-close-o-box");
        let moreProBox = document.querySelector(".visible_MoreProducts");

        mainMoreBut.style.display = "none"
        moreProBox.classList.toggle("activeMorePro");
    }
    return (
        <div className="products-main-container">
        <div className="product-grid">
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product1 } alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <img src={ product2 } alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                </a>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product3 } alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                <img src={ product4 } alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shirt</a>
                <h3>
                    <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$56.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product5 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                <img src={ product6 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">Jacket</a>
                <h3>
                    <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product7 } alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                <img src={ product8 } alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle pink">new</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">skirt</a>
                <h3>
                    <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product9 } alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                <img src={ product10 } alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">casual</a>
                <h3>
                    <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$99.00</p>
                    <del>$105.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product11 } alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                <img src={ product12 } alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$150.00</p>
                    <del>$170.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product13 } alt="Smart watche Vital Plus" className="product-img default" width={300} />
                <img src={ product14 } alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$100.00</p>
                    <del>$120.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product15 } alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                <img src={ product16 } alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">party wear</a>
                <h3>
                    <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$30.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product17 } alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                <img src={ product18 } alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <h3>
                    <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$32.00</p>
                    <del>$45.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product19 } alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                <img src={ product20 } alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">sports</a>
                <h3>
                    <a href="#" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$64.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product21 } alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                <img src={ product22 } alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">formal</a>
                <h3>
                    <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product23 } alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                <img src={ product24 } alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shorts</a>
                <h3>
                    <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$85.00</del>
                </div>
                </div>
            </div>
            </div>

            <div className="visible-re-pro-box">
                <div className="visible-re-pro-content">
                    <a href="/"><img src={ wRP1 } /></a>
                </div>
            </div>

            <div className="product-grid">
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product7 } alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                <img src={ product8 } alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle pink">new</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">skirt</a>
                <h3>
                    <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product9 } alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                <img src={ product10 } alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">casual</a>
                <h3>
                    <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$99.00</p>
                    <del>$105.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product11 } alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                <img src={ product12 } alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$150.00</p>
                    <del>$170.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product1 } alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <img src={ product2 } alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                </a>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product3 } alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                <img src={ product4 } alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shirt</a>
                <h3>
                    <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$56.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product5 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                <img src={ product6 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">Jacket</a>
                <h3>
                    <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product13 } alt="Smart watche Vital Plus" className="product-img default" width={300} />
                <img src={ product14 } alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$100.00</p>
                    <del>$120.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product15 } alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                <img src={ product16 } alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">party wear</a>
                <h3>
                    <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$30.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product17 } alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                <img src={ product18 } alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <h3>
                    <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$32.00</p>
                    <del>$45.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product19 } alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                <img src={ product20 } alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">sports</a>
                <h3>
                    <a href="#" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$64.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product21 } alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                <img src={ product22 } alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">formal</a>
                <h3>
                    <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product23 } alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                <img src={ product24 } alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shorts</a>
                <h3>
                    <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$85.00</del>
                </div>
                </div>
            </div>
            </div>

            <div className="visible-re-pro-box">
                <div className="visible-re-pro-content">
                    <a href="/"><img src={ wRP2 } /></a>
                </div>
            </div>

            <div className="product-grid">
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product7 } alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                <img src={ product8 } alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle pink">new</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">skirt</a>
                <h3>
                    <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product9 } alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                <img src={ product10 } alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">casual</a>
                <h3>
                    <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <div className="price-box">
                    <p className="price">$99.00</p>
                    <del>$105.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product11 } alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                <img src={ product12 } alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$150.00</p>
                    <del>$170.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product1 } alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                <img src={ product2 } alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                <p className="showcase-badge">15%</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                </a>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product3 } alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                <img src={ product4 } alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shirt</a>
                <h3>
                    <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$45.00</p>
                    <del>$56.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product5 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                <img src={ product6 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">Jacket</a>
                <h3>
                    <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product13 } alt="Smart watche Vital Plus" className="product-img default" width={300} />
                <img src={ product14 } alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">watches</a>
                <h3>
                    <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$100.00</p>
                    <del>$120.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product15 } alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                <img src={ product16 } alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">party wear</a>
                <h3>
                    <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$30.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product17 } alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                <img src={ product18 } alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">jacket</a>
                <h3>
                    <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$32.00</p>
                    <del>$45.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product19 } alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                <img src={ product20 } alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">sports</a>
                <h3>
                    <a href="#" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$58.00</p>
                    <del>$64.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product21 } alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                <img src={ product22 } alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">formal</a>
                <h3>
                    <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$50.00</p>
                    <del>$65.00</del>
                </div>
                </div>
            </div>
            <div className="showcase">
                <div className="showcase-banner">
                <img src={ product23 } alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                <img src={ product24 } alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                <p className="showcase-badge angle black">sale</p>
                <div className="showcase-actions">
                    <button className="btn-action">
                    <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                    <ion-icon name="bag-add-outline" />
                    </button>
                </div>
                </div>
                <div className="showcase-content">
                <a href="#" className="showcase-category">shorts</a>
                <h3>
                    <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                </h3>
                <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                </div>
                <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$85.00</del>
                </div>
                </div>
            </div>
            </div>
            
            <div onClick={ clickMorePro } className="visible-close-o-box"><span style={{ fontWeight: "500", margin: "0 5px 0 0" }}>More products</span> <ion-icon name="chevron-down-outline" className="botProIcon"></ion-icon></div>

            <div className="visible_MoreProducts">
                <div className="product-grid">
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product7 } alt="Black Floral Wrap Midi Skirt" className="product-img default" width={300} />
                    <img src={ product8 } alt="Black Floral Wrap Midi Skirt" className="product-img hover" width={300} />
                    <p className="showcase-badge angle pink">new</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">skirt</a>
                    <h3>
                        <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                    </div>
                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$35.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product9 } alt="Casual Men's Brown shoes" className="product-img default" width={300} />
                    <img src={ product10 } alt="Casual Men's Brown shoes" className="product-img hover" width={300} />
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">casual</a>
                    <h3>
                        <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                    </div>
                    <div className="price-box">
                        <p className="price">$99.00</p>
                        <del>$105.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product11 } alt="Pocket Watch Leather Pouch" className="product-img default" width={300} />
                    <img src={ product12 } alt="Pocket Watch Leather Pouch" className="product-img hover" width={300} />
                    <p className="showcase-badge angle black">sale</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">watches</a>
                    <h3>
                        <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$150.00</p>
                        <del>$170.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product1 } alt="Mens Winter Leathers Jackets" width={300} className="product-img default" />
                    <img src={ product2 } alt="Mens Winter Leathers Jackets" width={300} className="product-img hover" />
                    <p className="showcase-badge">15%</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">jacket</a>
                    <a href="#">
                        <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                    </a>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$48.00</p>
                        <del>$75.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product3 } alt="Pure Garment Dyed Cotton Shirt" className="product-img default" width={300} />
                    <img src={ product4 } alt="Pure Garment Dyed Cotton Shirt" className="product-img hover" width={300} />
                    <p className="showcase-badge angle black">sale</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">shirt</a>
                    <h3>
                        <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$56.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product5 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width={300} />
                    <img src={ product6 } alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width={300} />
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">Jacket</a>
                    <h3>
                        <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$65.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product13 } alt="Smart watche Vital Plus" className="product-img default" width={300} />
                    <img src={ product14 } alt="Smart watche Vital Plus" className="product-img hover" width={300} />
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">watches</a>
                    <h3>
                        <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$100.00</p>
                        <del>$120.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product15 } alt="Womens Party Wear Shoes" className="product-img default" width={300} />
                    <img src={ product16 } alt="Womens Party Wear Shoes" className="product-img hover" width={300} />
                    <p className="showcase-badge angle black">sale</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">party wear</a>
                    <h3>
                        <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$30.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product17 } alt="Mens Winter Leathers Jackets" className="product-img default" width={300} />
                    <img src={ product18 } alt="Mens Winter Leathers Jackets" className="product-img hover" width={300} />
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">jacket</a>
                    <h3>
                        <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$32.00</p>
                        <del>$45.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product19 } alt="Trekking & Running Shoes - black" className="product-img default" width={300} />
                    <img src={ product20 } alt="Trekking & Running Shoes - black" className="product-img hover" width={300} />
                    <p className="showcase-badge angle black">sale</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">sports</a>
                    <h3>
                        <a href="#" className="showcase-title">Trekking &amp; Running Shoes - black</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$64.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product21 } alt="Men's Leather Formal Wear shoes" className="product-img default" width={300} />
                    <img src={ product22 } alt="Men's Leather Formal Wear shoes" className="product-img hover" width={300} />
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">formal</a>
                    <h3>
                        <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$65.00</del>
                    </div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase-banner">
                    <img src={ product23 } alt="Better Basics French Terry Sweatshorts" className="product-img default" width={300} />
                    <img src={ product24 } alt="Better Basics French Terry Sweatshorts" className="product-img hover" width={300} />
                    <p className="showcase-badge angle black">sale</p>
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="eye-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="repeat-outline" />
                        </button>
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline" />
                        </button>
                    </div>
                    </div>
                    <div className="showcase-content">
                    <a href="#" className="showcase-category">shorts</a>
                    <h3>
                        <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                    </h3>
                    <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-outline" />
                        <ion-icon name="star-outline" />
                    </div>
                    <div className="price-box">
                        <p className="price">$78.00</p>
                        <del>$85.00</del>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Products;