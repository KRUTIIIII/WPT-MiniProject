import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#b3dcd4', padding: '30px 20px', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '20px' }}>
        
        {/* Useful Links */}
        <div>
          <h4 style={{ borderBottom: '2px solid black' }}>Useful Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Store Locator</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Promo Codes</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 style={{ borderBottom: '2px solid black' }}>Payment Methods</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <img src="/google-pay.png" alt="Google Pay" width="50" />
            <img src="/paytm.png" alt="Paytm" width="50" />
            <img src="/visa.png" alt="Visa" width="50" />
            <img src="/icons8-bhim-upi-50.png" alt="UPI" width="50" />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ borderBottom: '2px solid black' }}>Contact Us</h4>
          <p>📧 thecookiecravings@gmail.com</p>
          <p>📞 8182881881</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{ borderBottom: '2px solid black' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#"><img src="/icons8-facebook-48.png" alt="Facebook" width="30" /></a>
            <a href="#"><img src="/icons8-instagram-48.png" alt="Instagram" width="30" /></a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div style={{ textAlign: 'center', borderTop: '1px solid #aaa', paddingTop: '10px' }}>
        <p>
          Powered By <strong style={{ color: 'green' }}>uEngage</strong> &copy; Copyright. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
