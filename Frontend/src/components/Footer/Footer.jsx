import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">
{/*             <img src={assets.logo} alt="" /> */}
            <p>Our canteen online food ordering website makes it easy to browse the menu, customize your order, and get your meal quickly. Enjoy a seamless experience with secure payments and real-time order tracking, all from the convenience of your device.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Top Chef Canteen</li>
                <li></li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+919887657655</li>
                <li>canteen@iitdh.ac.in</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ canteeniitdh.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
