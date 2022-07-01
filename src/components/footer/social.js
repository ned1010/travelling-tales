import React from "react";
import { FaFacebookSquare, FaInstagram} from "react-icons/fa";
import { BsTwitter, BsYoutube} from "react-icons/bs";


export default function Social(){
    return (
        <div className="social-container">
            <div className="social-item">
                <a rel="noopener noreferrer" href="https://www.facebook.com/Travelling-Tales-107525315347054" target="_blank" className="social-link"><FaFacebookSquare/></a>
                <a rel="noopener noreferrer" href="https://www.instagram.com/travelling_talesladakh/" target="_blank" className="social-link"><FaInstagram/></a>
                <a rel="noopener noreferrer" href="https://www.twitter.com/" target="_blank" className="social-link"><BsTwitter/></a>
                <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCankBptE3EPq8jG_bd6b4jg" target="_blank" className="social-link"><BsYoutube/></a>
            </div>
        </div>
    )
};