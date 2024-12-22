import React from 'react';

const midpage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="/logo.svg" alt="1MDM Logo" />
            <p>One Medical Devices Market Place</p>
          </div>
          <div className="col-md-3">
            <h4>Platform</h4>
            <ul>
              <li><a href="/sell">Sell on 1MDM</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/brands">Brands</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Press Room</h4>
            <ul>
              <li><a href="/images-and-b-roll">Images & B-roll</a></li>
            </ul>
            <h4>Policies</h4>
            <ul>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/delivery-information">Delivery Information</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Reach Us</h4>
            <ul>
              <li><a href="/corporate-information">Corporate Information</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">&copy; 2024 1MDM by SuperLabs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default midpage;
