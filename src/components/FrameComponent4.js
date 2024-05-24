import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`landngpage-inner ${className}`}>
      <div className="frame-parent16">
        <div className="what-esim-is-wrapper">
          <h1 className="what-esim-is-container">
            <span>{`What `}</span>
            <span className="esim">eSIM</span>
            <span> is</span>
          </h1>
        </div>
        <div className="a-form-of-sim-card-embedded-di-wrapper">
          <p className="a-form-of-container">
            <span>
              <span className="a-form-of">
                A form of SIM card embedded directly into a mobile device that
                allows you to activate a cellular plan from any carrier without
              </span>
              <span className="having-to-use">
                having to use a physical SIM card.
              </span>
            </span>
          </p>
        </div>
        <div className="list">
          <div className="item">
            <img
              className="section-2-icon1svg"
              loading="lazy"
              alt=""
              src="/section2icon1svg.svg"
            />
            <h3 className="heading-23">A digital SIM Card</h3>
            <div className="buy-a-virtual">
              Buy a virtual SIM card from anywhere, anytime
            </div>
          </div>
          <div className="item1">
            <div className="section-2-icon2svg-wrapper">
              <img
                className="section-2-icon2svg"
                loading="lazy"
                alt=""
                src="/section2icon1svg.svg"
              />
            </div>
            <div className="heading-2-immediate-delivery-wrapper">
              <h3 className="heading-24">Immediate delivery</h3>
            </div>
            <div className="receive-the-esim">
              Receive the eSIM directly to your email in minutes
            </div>
          </div>
          <div className="item2">
            <img
              className="section-2-icon3svg"
              loading="lazy"
              alt=""
              src="/section2icon1svg.svg"
            />
            <div className="heading-2-easy-activation-wrapper">
              <b className="heading-25">Easy activation</b>
            </div>
            <div className="scan-the-qr">
              Scan the QR code and you’re connected
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
