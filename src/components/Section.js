import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <footer className={`section4 ${className}`}>
      <div className="heading-4-contact-info-group">
        <b className="heading-48">Contact Info</b>
        <div className="strong-emphasis-yoho-mobil-wrapper">
          <i className="strong-emphasis">YOHO MOBILE PTE. LTD.</i>
        </div>
        <div className="frame-parent53">
          <div className="wd-cursor-darksvg-wrapper">
            <img
              className="wd-cursor-darksvg-icon"
              loading="lazy"
              alt=""
              src="/wdcursordarksvg.svg"
            />
          </div>
          <div className="robinson-road-singapore1">
            {" "}
            14 Robinson road, Singapore.
          </div>
        </div>
        <div className="frame-parent54">
          <div className="wd-phone-darksvg-wrapper">
            <img
              className="wd-phone-darksvg-icon"
              loading="lazy"
              alt=""
              src="/wdphonedarksvg.svg"
            />
          </div>
          <div className="mobile-1-838-container1">
            <span>{` Mobile: `}</span>
            <span className="span5">+1 838 883 9588</span>
            <span> (WhatsApp)</span>
          </div>
        </div>
        <div className="frame-parent55">
          <div className="wd-envelope-darksvg-wrapper">
            <img
              className="wd-envelope-darksvg-icon"
              loading="lazy"
              alt=""
              src="/wdenvelopedarksvg.svg"
            />
          </div>
          <div className="email-supportyohomobilecom1">
            <span>{` Email: `}</span>
            <span className="supportyohomobilecom1">
              support@yohomobile.com
            </span>
          </div>
        </div>
      </div>
      <div className="frame-parent56">
        <div className="heading-4-yoho-mobile-container">
          <b className="heading-49">Yoho Mobile</b>
          <p className="link-about-container2">
            <span className="about-us3">About Us</span>
            <span className="partnership2">Partnership</span>
            <span className="contact-us1">Contact us</span>
            <span className="blog2">Blog</span>
          </p>
        </div>
        <div className="heading-4-legal-information-container">
          <b className="heading-410">Legal Information</b>
          <p className="link-terms-container2">
            <span className="terms-of-use2">Terms of use</span>
            <span className="cancellation-refund2">{`Cancellation & Refund`}</span>
            <span className="privacy-policy2">Privacy Policy</span>
            <span className="delivery-policy2">Delivery Policy</span>
            <span className="payment-guideline2">Payment Guideline</span>
          </p>
        </div>
      </div>
      <div className="heading-4-get-started-container">
        <b className="heading-411">Get Started</b>
        <p className="link-esim-container2">
          <span className="esim-compatible-devices2">
            eSIM compatible devices
          </span>
          <span className="how-to-set3">How to set up your eSIM</span>
          <span className="faqs2">FAQs</span>
        </p>
      </div>
    </footer>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
