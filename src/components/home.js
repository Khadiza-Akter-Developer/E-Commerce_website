import React, { useState } from "react";
import './home.css'
import { Link } from 'react-router-dom';
import Homeproduct from "./product";
import { TbSlideshow } from "react-icons/tb";
import { ImHeart } from "react-icons/im";
const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    //product filtering
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curELm) => {
            return curELm.type === x
        })
        setTrendingProduct((filterproduct))
    }
    //all product
    const allProduct = () => {
        setTrendingProduct(Homeproduct)
    }
    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>Winter Kurti</h3>
                        <h2>Kurti</h2>
                        <p>50% off for membership.</p>
                        <Link to='/shop' className="link">Let's Do Shopping</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allProduct()}>trending product</h2>
                                </div>
                                <div className="category">
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('woman')}>Woman</h3>
                                    <h3 onClick={() => filtercate('winter')}>Winter</h3>
                                    <h3 onClick={() => filtercate('man')}>Man </h3>

                                </div>
                            </div>
                            <div className="product">
                                <div className="container">
                                    {
                                        trendingProduct.map((curELm) => {
                                            return (
                                                <>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={curELm.image} alt=""></img>
                                                            <div className="icon">
                                                                <div className="icon-box">
                                                                    <TbSlideshow />
                                                                </div>
                                                                <div className="icon-box">
                                                                    <ImHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curELm.Name}</h3>
                                                            <p>{curELm.price}</p>
                                                            {/* <Link to='/cart'> Add to Cart </Link> */}
                                                            <button className="btn"> Add to Cart </button>

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button className="show-btn">Show More</button>
                            </div>
                        </div>
                        {/* <div className="right_box">
                           <div className="container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our testimonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src="image/" alt="testimonial"></img>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> */}
                        <div className="banners">
                            <div className="container">
                                <div className="left_box">
                                    <div className="box">
                                        <img src=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;