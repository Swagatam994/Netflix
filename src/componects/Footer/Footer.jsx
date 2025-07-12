import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icon">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        <li>Media Centre</li>
        <li>Investor Relations </li>
        <li>Jobs </li>
        <li>Terms of Use</li>
        <li>Privacy </li>
        <li>Legal Notice </li>
        <li>Cookie Preerences </li>
        <li>Corporate Information </li>
        <li>Contact Us</li>
        
        
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix,Inc</p>
    </div>
  )
}

export default Footer
