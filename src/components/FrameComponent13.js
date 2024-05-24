import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <div className={`frame-parent89 ${className}`}>
      <div className="heading-4-contact-info-parent1">
        <b className="heading-421">Contact Info</b>
        <i className="strong-emphasis3">YOHO MOBILE PTE. LTD.</i>
      </div>
      <div className="frame-parent90">
        <div className="wd-cursor-darksvg-frame">
          <img
            className="wd-cursor-darksvg-icon3"
            loading="lazy"
            alt=""
            src="/wdcursordarksvg2.svg"
          />
        </div>
        <div className="robinson-road-singapore4">
          {" "}
          14 Robinson road, Singapore.
        </div>
      </div>
      <div className="frame-parent91">
        <div className="wd-phone-darksvg-wrapper1">
          <img
            className="wd-phone-darksvg-icon3"
            loading="lazy"
            alt=""
            src="/wdphonedarksvg.svg"
          />
        </div>
        <div className="mobile-1-838-container4">
          <span>{` Mobile: `}</span>
          <span className="span9">+1 838 883 9588</span>
          <span> (WhatsApp)</span>
        </div>
      </div>
      <div className="frame-parent92">
        <div className="wd-envelope-darksvg-wrapper1">
          <img
            className="wd-envelope-darksvg-icon3"
            loading="lazy"
            alt=""
            src="/wdenvelopedarksvg2.svg"
          />
        </div>
        <div className="email-supportyohomobilecom4">
          <span>{` Email: `}</span>
          <span className="supportyohomobilecom4">support@yohomobile.com</span>
        </div>
      </div>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
