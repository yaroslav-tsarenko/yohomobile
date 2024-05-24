import Item from "./Item";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`landngpage-inner1 ${className}`}>
      <div className="frame-parent28">
        <div className="frame-wrapper11">
          <div className="frame-parent29">
            <div className="section-4-bannerwebp-wrapper">
              <img
                className="section-4-bannerwebp-icon"
                loading="lazy"
                alt=""
                src="/section4bannerwebp@2x.png"
              />
            </div>
            <div className="how-yohomobilecom-benefits-yo-parent">
              <h1 className="how-yohomobilecom-benefits-container">
                <p className="how-yohomobilecom">
                  <span className="how">{`How `}</span>
                  <span>yohomobile.com</span>
                </p>
                <p className="benefits-you">benefits you</p>
              </h1>
              <div className="list-parent">
                <div className="list1">
                  <Item
                    sVG="/svg.svg"
                    heading3DigitalConvenienc="Digital Convenience"
                    withDigitalESIMsYouDontHa="With digital eSIMs, you don’t have to hassle with swapping physical SIM"
                    cardsWhenYouTravel="cards when you travel."
                  />
                  <div className="item6">
                    <div className="svg-frame">
                      <img className="svg-icon2" alt="" src="/svg-1.svg" />
                    </div>
                    <div className="heading-3-instant-access-parent">
                      <b className="heading-311">Instant Access</b>
                      <p className="purchase-esims-for-container">
                        <span>
                          <span className="purchase-esims-for">
                            Purchase eSIMs for local, regional, or global
                            coverage from anywhere, at
                          </span>
                          <span className="any-time-get">
                            any time. Get your eSIM delivered to your email
                            within minutes.
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <Item
                    sVG="/svg-2.svg"
                    heading3DigitalConvenienc="Easy Connection"
                    withDigitalESIMsYouDontHa="Activate your eSIM effortlessly by scanning a QR code. Stay connected"
                    cardsWhenYouTravel="instantly with the best local network available."
                    propFlex="1"
                    propMinWidth="350px"
                    propMargin="unset"
                  />
                  <Item
                    sVG="/svg-3.svg"
                    heading3DigitalConvenienc="Save on Roaming"
                    withDigitalESIMsYouDontHa="Say goodbye to expensive roaming fees. With eSIMs, you no longer need"
                    cardsWhenYouTravel="to waste money on pricey roaming data."
                    propFlex="unset"
                    propMinWidth="unset"
                    propMargin="0"
                  />
                </div>
                <u className="link-learn">
                  Learn more about installing an eSIM
                </u>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section-inner">
            <div className="choose-yoho-mobile-for-the-bes-parent">
              <h1 className="choose-yoho-mobile-container">
                <p className="choose-yoho-mobile">Choose Yoho Mobile for the</p>
                <p className="best-esim-experience">best eSIM experience</p>
              </h1>
              <div className="item-1-enjoy-fast-data-spee-parent">
                <div className="item-1">1. Enjoy fast data speeds.</div>
                <p className="item-2">
                  2. Always available support – reach us anytime via email,
                  hotline, or WhatsApp.
                </p>
                <p className="item-3">
                  3. Say goodbye to costly roaming – use local rate prepaid
                  plans.
                </p>
                <p className="item-4">
                  4. Keep your main SIM for calls and texts – no need to switch
                  SIMs during travel.
                </p>
              </div>
            </div>
          </div>
          <img
            className="section-5-bannerwebp-icon"
            loading="lazy"
            alt=""
            src="/section5bannerwebp@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
