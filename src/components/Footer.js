import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-inner">
        <div className="frame-parent37">
          <div className="heading-4-contact-info-parent">
            <b className="heading-43">Contact Info</b>
            <i className="heading-44">YOHO MOBILE PTE. LTD.</i>
            <div className="frame-parent38">
              <div className="image-wrapper9">
                <img className="image-icon17" alt="" src="/image-14.svg" />
              </div>
              <div className="robinson-road-singapore">
                14 Robinson road, Singapore.
              </div>
            </div>
            <div className="frame-parent39">
              <div className="image-wrapper10">
                <img className="image-icon18" alt="" src="/image-15.svg" />
              </div>
              <div className="mobile-1-838-container">
                <span>{`Mobile: `}</span>
                <span className="span4">+1 838 883 9588</span>
                <span> (WhatsApp)</span>
              </div>
            </div>
            <div className="frame-parent40">
              <div className="image-wrapper11">
                <img className="image-icon19" alt="" src="/image-16.svg" />
              </div>
              <div className="email-supportyohomobilecom">
                <span>{`Email: `}</span>
                <span className="supportyohomobilecom">
                  support@yohomobile.com
                </span>
              </div>
            </div>
          </div>
          <div className="heading-4-yoho-mobile-group">
            <b className="heading-45">Yoho Mobile</b>
            <p className="link-about-container1">
              <span className="about-us1">About us</span>
              <span className="partnership1">Partnership</span>
              <span className="contact">Contact</span>
              <span className="blog1">Blog</span>
            </p>
          </div>
          <div className="heading-4-legal-information-group">
            <b className="heading-46">Legal Information</b>
            <p className="link-terms-container1">
              <span className="terms-of-use1">Terms of use</span>
              <span className="cancellation-refund1">{`Cancellation & Refund`}</span>
              <span className="privacy-policy1">Privacy Policy</span>
              <span className="delivery-policy1">Delivery Policy</span>
              <span className="payment-guideline1">Payment Guideline</span>
            </p>
          </div>
          <div className="heading-4-get-started-group">
            <b className="heading-47">Get Started</b>
            <p className="link-esim-container1">
              <span className="esim-compatible-devices1">
                eSIM compatible devices
              </span>
              <span className="how-to-set2">How to set up your eSIM</span>
              <span className="faqs1">FAQs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="yoho-mobile-all2">
        ©2023 Yoho Mobile all rights reserved
      </div>
      <img
        className="back-toppng-icon"
        loading="lazy"
        alt=""
        src="/backtoppng@2x.png"
      />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
