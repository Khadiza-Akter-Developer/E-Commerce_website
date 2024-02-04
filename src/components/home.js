import React, { useState } from "react";
import './home.css'
import { Link } from 'react-router-dom';
import Homeproduct from "./product";
import { TbSlideshow } from "react-icons/tb";
import { ImHeart } from "react-icons/im";
const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
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
                                    <h2>trending product</h2>
                                </div>
                                <div className="category">
                                    <h3>New</h3>
                                    <h3>Featured</h3>
                                    <h3>Top selling product</h3>
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
                                                    </div>
                                                </>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="right_box">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;