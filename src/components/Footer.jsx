import './Footer.css';
import logo2 from '../images/logo2.png'; 
import location from '../images/location.gif'; 


function Footer() {
  return (
      <>
    <div className="map-address-section">
  <h2>Find Us Here<img src={location} className="location-icon"></img></h2>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28777.605759013398!2d85.12323227645327!3d25.619334820953264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587ae5a50f2b%3A0x40b87e078e5b2207!2sRmanam%20Infotech%20%7C%20Website%20Design%20Development%20%7C%20Mobile%20App%20%7C%20Patna%2C%20Highway%20Services%2C%20Opp%20Transport%20Nagar%2C%20New%20Bypass%20Road%2C%20NH%2030%2C%20Patna%2C%20Bihar%20800016!5e0!3m2!1sen!2sin!4v1717050000000!5m2!1sen!2sin"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

    
    <div className='footer'>
      <div className='footer-container'>

        {/* Left Column */}
        <div className='footer-left'>
          <div className="navbar-logo">
                  <img src={logo2} alt="TopTech Logo" />
                </div>
          <p>
            Monotonectally synergize granular top visualize strategic infomediaries
            afters task state of the art infrastructures digital agency in north
          </p>
          <div className='discoverButton'>
          Discover More
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>          
        </div>
        </div>

        {/* Company Links */}
        <div className='footer-section'>
          <h3>Company</h3>
          <ul>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>About Us</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Our Team</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Pricing Plan</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Latest Blog</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Careers</li>
          </ul>
        </div>

        {/* Services Links */}
        <div className='footer-section'>
          <h3>Our Services</h3>
          <ul>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>IT Solutions</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Cyber Security</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Digital Marketing</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>Brand Identity</li>
            <li><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-PrimaryColor-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="m12 16 4-4-4-4"></path></svg>SEO Marketing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='footer-newsletter'>
          <h3>Newsletter</h3>
          <p>Subscribe Our Latest Newsletter</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Your E-Mail*" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Toptech. Designed By Dream IT Solution</p>
        <div className="social-icons">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>      
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>      
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>      
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>      

        </div>
        
      </div>
    </div>
    </>
  );
}

export default Footer;
