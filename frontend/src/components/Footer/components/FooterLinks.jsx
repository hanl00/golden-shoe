import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footer-contaner">
      <div>
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Company</NavLink>
          </li>
          <li>
            <NavLink to="/">Location</NavLink>
          </li>
          <li>
            <NavLink to="/">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/">Opening Hours</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Useful links</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Help</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Customer Service</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Payment Methods</NavLink>
          </li>
          <li>
            <NavLink to="/">Money back</NavLink>
          </li>
          <li>
            <NavLink to="/">Returns</NavLink>
          </li>
          <li>
            <NavLink to="/">Shipping</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Join Us</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a
              href="https://twitter.com/GoldenShoeLDN"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Golden-Shoe-111916887925727"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink to="/">Linkedin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
