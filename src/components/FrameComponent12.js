import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <footer className={`section-parent ${className}`}>
      <div className="section7">
        <div className="frame-parent84">
          <div className="heading-4-contact-info-container">
            <b className="heading-417">Contact Info</b>
            <i className="strong-emphasis2">YOHO MOBILE PTE. LTD.</i>
          </div>
          <div className="frame-parent85">
            <div className="wd-cursor-darksvg-container">
              <img
                className="wd-cursor-darksvg-icon2"
                alt=""
                src="/wdcursordarksvg.svg"
              />
            </div>
            <div className="robinson-road-singapore3">
              {" "}
              14 Robinson road, Singapore.
            </div>
          </div>
          <div className="frame-parent86">
            <div className="wd-phone-darksvg-frame">
              <img
                className="wd-phone-darksvg-icon2"
                alt=""
                src="/wdphonedarksvg.svg"
              />
            </div>
            <div className="mobile-1-838-container3">
              <span>{` Mobile: `}</span>
              <span className="span8">+1 838 883 9588</span>
              <span> (WhatsApp)</span>
            </div>
          </div>
          <div className="frame-parent87">
            <div className="wd-envelope-darksvg-frame">
              <img
                className="wd-envelope-darksvg-icon2"
                alt=""
                src="/wdenvelopedarksvg2.svg"
              />
            </div>
            <div className="email-supportyohomobilecom3">
              <span>{` Email: `}</span>
              <span className="supportyohomobilecom3">
                support@yohomobile.com
              </span>
            </div>
          </div>
        </div>
        <div className="heading-4-yoho-mobile-parent1">
          <b className="heading-418">Yoho Mobile</b>
          <p className="link-about-container4">
            <span className="about-us5">About Us</span>
            <span className="partnership4">Partnership</span>
            <span className="contact-us3">Contact us</span>
            <span className="blog4">Blog</span>
          </p>
        </div>
        <div className="heading-4-legal-information-parent1">
          <b className="heading-419">Legal Information</b>
          <p className="link-terms-container4">
            <span className="terms-of-use4">Terms of use</span>
            <span className="cancellation-refund4">{`Cancellation & Refund`}</span>
            <span className="privacy-policy4">Privacy Policy</span>
            <span className="delivery-policy4">Delivery Policy</span>
            <span className="payment-guideline4">Payment Guideline</span>
          </p>
        </div>
        <div className="heading-4-get-started-parent2">
          <b className="heading-420">Get Started</b>
          <p className="link-esim-container4">
            <span className="esim-compatible-devices4">
              eSIM compatible devices
            </span>
            <span className="how-to-set5">How to set up your eSIM</span>
            <span className="faqs4">FAQs</span>
          </p>
        </div>
      </div>
      <div className="background21">
        <div className="yoho-mobile-all4">
          ©2023 Yoho Mobile all rights reserved
        </div>
      </div>
    </footer>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
