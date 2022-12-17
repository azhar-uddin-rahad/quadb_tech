import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the company</span> From empowering challenger brands to
            think out of the usual to helping global brands feel closer to home,
            we leverage technology in a way that brings people closer to
            products, content, and experiences they love.
          </p>
          <div className="icons">
            <Link href="#">
              {" "}
              <FaInstagram></FaInstagram>
            </Link>
            <Link href="#">
              <FaFacebook></FaFacebook>
            </Link>
            <Link href="#">
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
            <Link href="#">
              <FaTwitter></FaTwitter>
            </Link>
            <Link href="#">
              <FaGooglePlusG></FaGooglePlusG>
            </Link>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i>
              {" "}
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </i>
            <p>
              <span> 97/8 / Dhanmondi-1209 Dhaka, Jigatala TSO</span> Dhaka,
              Bangladesh
            </p>
          </div>
          <div>
            <i>
              {" "}
              <FaPhone></FaPhone>
            </i>
            <p> (+880) 01892975130</p>
          </div>
          <div>
            <i>
              <FaEnvelope></FaEnvelope>
            </i>
            <p>
              <Link href="#"> azhar.rahad1@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <Link to="/">
            <img src="https://quadbtech.com/images/QBT%20Logo.png" alt="" />
          </Link>
          <p className="menu">
            <Link href="#"> Home</Link> |<Link href="#"> About</Link> |
            <Link href="#"> Services</Link> |<Link href="#"> Portfolio</Link> |
            <Link href="#"> News</Link> |<Link href="#"> Contact</Link>
          </p>
          <p className="name"> </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
