import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      {/* First Section in One Row */}
      <div className="footer-row">
        <div className="footer-column">
          <h4>Jobs by Functional Area</h4>
          <ul>
            <li>Sales & Business Development Jobs</li>
            <li>Client Services & Customer Support Jobs</li>
            <li>Accounts, Finance & Financial Services Jobs</li>
            <li>Software & Web Development Jobs</li>
            <li>Marketing Jobs</li>
            <li>Creative Design Jobs</li>
            <li>Telemarketing Jobs</li>
            <li>Human Resources Jobs</li>
            <li>Secretarial, Clerical & Front Office Jobs</li>
            <li>Teachers/Education, Training & Development Jobs</li>
            <li>Operations Jobs</li>
            <li>Health & Medicine Jobs</li>
            <li>Computer Networking Jobs</li>
            <li>Engineering Jobs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Jobs By City</h4>
          <ul>
            <li>Jobs in Lahore</li>
            <li>Jobs in Karachi</li>
            <li>Jobs in Islamabad</li>
            <li>Jobs in Rawalpindi</li>
            <li>Jobs in Faisalabad</li>
            <li>Jobs in Multan</li>
            <li>Jobs in Gujranwala</li>
            <li>Jobs in Quetta</li>
            <li>Jobs in Peshawar</li>
            <li>Jobs in Hyderabad Pakistan</li>
            <li>Jobs in Sialkot</li>
            <li>Jobs in Sargodha</li>
            <li>Jobs in Gujrat</li>
            <li>Jobs in Sheikhupura</li>
            <li>Jobs in Bahawalpur</li>
            <li>Jobs in Sahiwal</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Jobs By Industry</h4>
          <ul>
            <li>Information Technology Jobs</li>
            <li>Call Center Jobs</li>
            <li>Manufacturing Jobs</li>
            <li>Recruitment / Employment Firms Jobs</li>
            <li>Services Jobs</li>
            <li>Education/Training Jobs</li>
            <li>BPO Jobs</li>
            <li>Banking/Financial Services Jobs</li>
            <li>Healthcare / Hospital / Medical Jobs</li>
            <li>E-Commerce / E-Business Jobs</li>
            <li>N.G.O./Social Services Jobs</li>
            <li>Real Estate/Property Jobs</li>
            <li>Consultants Jobs</li>
            <li>Construction / Cement / Metals Jobs</li>
            <li>Other Jobs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Job Seekers</h4>
          <ul>
            <li>British Council Online Placement Test</li>
            <li>Top Professionals</li>
            <li>CV Writing</li>
            <li>Free CV Review</li>
            <li>Success Stories</li>
            <li>Contact Us</li>
          </ul>

          {/* Employers directly below Job Seekers */}
          <h4>Employers</h4>
          <ul>
            <li>Create Account</li>
            <li>Post a Job</li>
            <li>Employer Products</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Moved International Jobs and Follow Us here */}
        <div className="footer-column">
          <h4>International Jobs</h4>
          <ul>
            <li>Jobs in Saudi Arabia</li>
            <li>Jobs in Bahrain</li>
            <li>Jobs in Qatar</li>
            <li>Jobs in UAE</li>
            <li>Jobs in Malaysia</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li>Download Rozee App</li>
            <li>Google Play Store</li>
            <li>App Store</li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Bottom Section with Copyright and Links */}
      <div className="footer-bottom">
        <p>Copyright ©2024 ROZEE - Jobs in Pakistan - All Rights Reserved. - A Division of Naseeb Networks, Inc.</p>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Contact Sales</li>
        </ul>
        <div className="saudi-jobs">
          <p>Jobs in Saudi Arabia | Jobs in Jeddah | Jobs in Dammam | Jobs in Riyadh | Jobs in Khobar | Jobs in Makkah | Jobs in Madinah | Jobs in Najran</p>
          <p>وظائف في السعودية | وظائف جدة | وظائف الدمام | وظائف الرياض | وظائف الخبر | وظائف مكة المكرمة | وظائف المدينة | وظائف نجران</p>
        </div>
        <ul>
          <li>Driver Jobs</li>
          <li>Cook Jobs</li>
          <li>Maid Jobs</li>
          <li>Office Boy Jobs</li>
          <li>Security Guard Jobs</li>
          <li>Rozgar</li>
        </ul>
        <ul>
          <li>About ROZEE.PK</li>
          <li>Why we are #1</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Picture Policy</li>
          <li>Bug Bounty</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
