import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaLinkedinIn,FaTwitter,FaGooglePlusG,FaInstagram,FaMapMarkerAlt,FaPhone, FaEnvelope} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <div>
           <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div class="icons">
      <Link href="#"> <FaInstagram></FaInstagram></Link>
      <Link href="#"><FaFacebook></FaFacebook></Link>
      <Link href="#"><FaLinkedinIn></FaLinkedinIn></Link>
      <Link href="#"><FaTwitter></FaTwitter></Link>
      <Link href="#"><FaGooglePlusG></FaGooglePlusG></Link>

    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
   <i> <FaMapMarkerAlt></FaMapMarkerAlt></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
   <i> <FaPhone></FaPhone></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
    <i><FaEnvelope></FaEnvelope></i>
      <p><Link href="#"> office@company.com</Link></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Company<span> logo</span></h2>
    <p class="menu">
      <Link href="#"> Home</Link> |
      <Link href="#"> About</Link> |
      <Link href="#"> Services</Link> |
      <Link href="#"> Portfolio</Link> |
      <Link href="#"> News</Link> |
      <Link href="#"> Contact</Link>
    </p>
    <p class="name"> Company Name &copy; 2016</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;