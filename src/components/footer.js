import React  from "react";
import './footer.css';
import { FaCopyright } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                        <FaCopyright />                        
                        </div>
                        <div className="detail">
                            <h3>Happiness</h3>
                        </div>
                        <div className="f_icon">
                            <div className="icons">
                            <IoLogoFacebook />
                            </div>
                            <div className="iconss">
                            <FaInstagram />                            
                            </div>
                            <div className="iconss">
                            <FaTwitter />                            
                            </div>
                            <div className="iconss">
                            <FaYoutube />                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="right_box">
                        <div className="f_icon">
                            <div className="icons">
                            <IoLogoFacebook />
                            </div>
                            <div className="icons">
                            <FaInstagram />                            
                            </div>
                        </div>
                        </div> */}
            </div>
        </div>
        </>
            )
}
export default Footer;