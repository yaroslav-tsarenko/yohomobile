import "./Contact.css";

const Contact = ({ className = "" }) => {
  return (
    <footer className={`contact1 ${className}`}>
      <div className="section6">
        <div className="contact-details">
          <div className="heading-413">Contact Info</div>
          <i className="strong-emphasis1">YOHO MOBILE PTE. LTD.</i>
          <div className="contact-options">
            <div className="contact-icons">
              <img
                className="wd-cursor-darksvg-icon1"
                loading="lazy"
                alt=""
                src="/wdcursordarksvg1.svg"
              />
            </div>
            <div className="robinson-road-singapore2">
              {" "}
              14 Robinson road, Singapore.
            </div>
          </div>
          <div className="contact-options1">
            <div className="wd-phone-darksvg-container">
              <img
                className="wd-phone-darksvg-icon1"
                loading="lazy"
                alt=""
                src="/wdphonedarksvg1.svg"
              />
            </div>
            <div className="mobile-1-838-container2">
              <span>{` Mobile: `}</span>
              <span className="span7">+1 838 883 9588</span>
              <span> (WhatsApp)</span>
            </div>
          </div>
          <div className="contact-options2">
            <div className="wd-envelope-darksvg-container">
              <img
                className="wd-envelope-darksvg-icon1"
                alt=""
                src="/wdenvelopedarksvg1.svg"
              />
            </div>
            <div className="email-supportyohomobilecom2">
              <span>{` Email: `}</span>
              <span className="supportyohomobilecom2">
                support@yohomobile.com
              </span>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="heading-414">Yoho Mobile</div>
          <p className="link-about-container3">
            <span className="about-us4">About Us</span>
            <span className="partnership3">Partnership</span>
            <span className="contact-us2">Contact us</span>
            <span className="blog3">Blog</span>
          </p>
        </div>
        <div className="legal">
          <div className="heading-415">Legal Information</div>
          <p className="link-terms-container3">
            <span className="terms-of-use3">Terms of use</span>
            <span className="cancellation-refund3">{`Cancellation & Refund`}</span>
            <span className="privacy-policy3">Privacy Policy</span>
            <span className="delivery-policy3">Delivery Policy</span>
            <span className="payment-guideline3">Payment Guideline</span>
          </p>
        </div>
        <div className="heading-4-get-started-parent1">
          <div className="heading-416">Get Started</div>
          <p className="link-esim-container3">
            <span className="esim-compatible-devices3">
              eSIM compatible devices
            </span>
            <span className="how-to-set4">How to set up your eSIM</span>
            <span className="faqs3">FAQs</span>
          </p>
        </div>
      </div>
      <div className="background17">
        <div className="yoho-mobile-all3">
          ©2023 Yoho Mobile all rights reserved
        </div>
      </div>
    </footer>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
