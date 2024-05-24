import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Link6 from "./Link6";
import Link5 from "./Link5";
import Link4 from "./Link4";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background16 ${className}`}>
      <div className="container10" />
      <div className="heading-53">
        <b className="description">Description</b>
        <div className="horizontal-divider2" />
      </div>
      <div className="backgroundshadow">
        <div className="inner-content-wrapper">
          <div className="inner-content">
            <div className="inner-content-inner">
              <div className="discover-what-our-customers-sa-parent">
                <h2 className="discover-what-our-container">
                  <p className="discover-what-our">
                    Discover what our customers say about this Real Unlimited
                    eSIM - see the real reviews on
                  </p>
                  <p className="trustpilot">Trustpilot!</p>
                </h2>
                <div className="review-link">
                  <div className="see-our-193-reviews-on-parent">
                    <div className="see-our-193-container">
                      <span>{`See our `}</span>
                      <b>193</b>
                      <span> reviews on</span>
                    </div>
                    <img
                      className="img-icon"
                      loading="lazy"
                      alt=""
                      src="/img.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="support-links">
              <div className="border4">
                <div className="purchase-process">
                  <div className="purchase-steps">
                    <input className="svg" type="checkbox" />
                    <h3 className="link-to">
                      To successfully purchase and activate your eSIM, follow
                      these steps:
                    </h3>
                  </div>
                </div>
                <div className="region">
                  <p className="orders-placed-before-container">
                    <span className="orders-placed-before">
                      Orders placed before 1PM on the same day in Eastern time
                      will be activated before 1PM. Orders placed after 1PM will
                    </span>
                    <span className="be-activated-within">
                      be activated within one hour. It’s important to note that
                      eSIM will not be activated immediately upon purchase and
                    </span>
                    <span className="you-will-not">
                      you will not receive a QR code. Instead, the eSIM will be
                      directly pushed to your phone before 1PM on the activation
                    </span>
                    <span className="date-you-select">
                      date you select, based on Eastern Standard Time (EST).
                      Therefore, make sure to specify the activation date during
                    </span>
                    <span className="checkout">checkout</span>
                  </p>
                  <p className="during-checkout-provide-container">
                    <span className="during-checkout-provide-the-e">
                      <span className="during-checkout-provide">{`During checkout, provide the `}</span>
                      <b className="eid">EID</b>
                      <span className="and">{` and `}</span>
                      <b className="imei2">IMEI2</b>
                      <span>
                        {" "}
                        of your device, and select your desired activation date.
                        Note that timing
                      </span>
                    </span>
                    <span className="is-based-on-utcgmt-7-los-an">
                      <span>is based on UTC/GMT -7, Los Angeles time.</span>
                    </span>
                  </p>
                  <p className="post-purchase-youll-receive-container">
                    <span className="post-purchase-youll-receive">
                      Post-purchase, you’ll receive an activation manual in your
                      email within 5 minutes. Please check your spam folder if
                    </span>
                    <span className="not-received-and">
                      not received and whitelist shop@yohomobile.com.
                    </span>
                  </p>
                  <p className="please-be-aware">
                    Please be aware that this Unlimited package will not appear
                    under the “My eSIMs” section.
                  </p>
                </div>
              </div>
              <TextField
                className="border5"
                placeholder="Special products non-refundable"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <img width="20px" height="20px" src="/svg-2.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d5d8dc" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    paddingLeft: "21px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "20px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "10px",
                    color: "#373547",
                  },
                }}
              />
              <TextField
                className="border6"
                placeholder="Do I have the number? Can I make phone calls?"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <img width="20px" height="20px" src="/svg-3.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d5d8dc" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    paddingLeft: "21px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "20px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "10px",
                    color: "#373547",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="speed-reduction">
          <div className="speed-info">
            <div className="speed-content">
              <img
                className="animation2png-icon"
                loading="lazy"
                alt=""
                src="/animation2png@2x.png"
              />
              <img
                className="elements1-1png-icon"
                alt=""
                src="/elements11png@2x.png"
              />
            </div>
          </div>
          <div className="are-you-still-troubled-by-the-parent">
            <p className="are-you-still-container">
              <span className="are-you-still">
                Are you still troubled by the Speed Reduction of
              </span>
              <span className="unlimited-products-that">
                "unlimited" products that exceed the usage limit?
              </span>
            </p>
            <div className="speed-solution">
              <div className="speed-benefits">
                <p className="start-from-1-container">
                  <span className="start-from-1">
                    Start from $1 per day, you can keep a High Speed internet
                  </span>
                  <span className="connection-all-day">
                    connection all day long
                  </span>
                </p>
                <p className="no-sudden-loss-container">
                  <span className="no-sudden-loss">{`No sudden loss of internet & no worry about data`}</span>
                  <span className="usage">usage.</span>
                </p>
              </div>
            </div>
            <div className="unlimited-data">
              <div className="data-benefits">
                <b className="heading-332">{`Unlimited 5G Data, Unlimited Talk Time & Unlimited SMS.`}</b>
              </div>
              <div className="with-t-mobile-wide-coverage-in-wrapper">
                <p className="with-t-mobile-wide-container">
                  <span className="with-t-mobile-wide">
                    With T-Mobile wide coverage in US. In areas without
                  </span>
                  <span className="g-coverage-4glte">
                    5G coverage, 4G/LTE will be provided (no speed
                  </span>
                  <span className="restrictions">restrictions)</span>
                </p>
              </div>
              <div className="plans-sold">
                <div className="plans-info">
                  <img
                    className="svg-icon4"
                    loading="lazy"
                    alt=""
                    src="/svg-4.svg"
                  />
                  <div className="plans-title">
                    <b className="heading-333">2M+ Plans Sold in Yoho</b>
                  </div>
                </div>
                <div className="customer-services">
                  <p className="customer-services-always">
                    24/7 Customer Services always keep you connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="image5">
            <div className="type-content">
              <div className="type-icons">
                <input className="svg1" type="radio" name="radioGroup-1" />
                <input className="svg2" type="radio" name="radioGroup-1" />
                <input className="svg3" type="radio" name="radioGroup-1" />
              </div>
              <div className="validity-icons">
                <input className="svg4" type="radio" name="radioGroup-1" />
                <input className="svg5" type="radio" name="radioGroup-1" />
                <input className="svg6" type="radio" name="radioGroup-1" />
                <input className="svg7" type="radio" name="radioGroup-1" />
                <input className="svg8" type="radio" name="radioGroup-1" />
                <input className="svg9" type="radio" name="radioGroup-1" />
                <input className="svg10" type="radio" name="radioGroup-1" />
                <input className="svg11" type="radio" name="radioGroup-1" />
                <input className="svg12" type="radio" name="radioGroup-1" />
              </div>
            </div>
            <div className="plan-properties">
              <div className="strong-plan-container">
                <b>{`Plan type: `}</b>
                <span>{`Prepaid, Unlimited Data, Local Voice & Local SMS`}</span>
              </div>
              <p className="strong-validity-container">
                <b>Validity start:</b>
                <span>
                  {" "}
                  1PM LA time on the selected activation date, scanning before
                  this time will result in an error message.
                </span>
              </p>
              <p className="strong-validity-container1">
                <span className="validity-of-qr-code-please-ke">
                  <b className="validity-of-qr">Validity of QR code:</b>
                  <span>
                    {" "}
                    Please keep your phone connected upon arrival in the US and
                    eSIM will be pushed to the device. A generic qrcode needs to
                    be scanned only if
                  </span>
                </span>
                <span className="you-dont-receive-a-push-won">
                  <span>
                    you don't receive a push (won't work until the activation
                    time)
                  </span>
                </span>
              </p>
              <div className="strong-coverage-container">
                <b>Coverage area:</b>
                <span> 🇺🇸 United States (US)</span>
              </div>
              <div className="strong-network-container">
                <b>Network operator:</b>
                <span> T-Mobile : LTE, T-Mobile: 5G</span>
              </div>
              <div className="local-phone-number-container">
                <b>Local phone number:</b>
                <span> Yes</span>
              </div>
              <p className="hotspottethering-yes-device-container">
                <b>Hotspot/Tethering:</b>
                <span>
                  {" "}
                  Yes, devices connected to the hotspot will only have access to
                  the 3G network.
                </span>
              </p>
              <div className="strong-internet-container">
                <b>Internet speed:</b>
                <span> 5G/4G/LTE</span>
              </div>
              <div className="strong-installation-container">
                <b>Installation:</b>
                <span>
                  {" "}
                  eSIM will push to the device on the activation date by
                  T-Mobile (no need to scan or manually install)
                </span>
              </div>
              <div className="strong-activation-container">
                <b>Activation:</b>
                <span>
                  {" "}
                  Automatic, activated when connected to a supported cellular
                  network
                </span>
              </div>
              <div className="strong-payment-container">
                <b>Payment:</b>
                <span> Credit card/Debit card, WeChat</span>
              </div>
              <p className="strong-delivery-container">
                <b>Delivery:</b>
                <span>
                  {" "}
                  You'll receive an installation instruction email in 5 mins,
                  and you'll receive a push eSIM on the activation date of your
                  choice
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="image6">
          <div className="question-list">
            <div className="question-heading">
              <div className="heading-container">
                <h1 className="frequently-asked-questions-container1">
                  <span>{`Frequently asked `}</span>
                  <span className="questions1">questions</span>
                </h1>
                <div className="additional-info">
                  <div className="if-you-still1">
                    If you still have questions about this service? We are here
                    to help
                  </div>
                </div>
              </div>
            </div>
            <div className="passport-question">
              <div className="border7" />
              <div className="passport-info">
                <div className="passport-details">
                  <b className="do-i-need">
                    Do I need a passport to buy the eSIM?
                  </b>
                  <p className="it-is-not">
                    It is not necessary to show your passport when buying eSIMs
                    at YohoMobile.com.
                  </p>
                </div>
              </div>
              <img
                className="button-toggle3"
                alt=""
                src="/button--toggle@2x.png"
              />
            </div>
            <Link6 whenDoesMyYohoMobileESIMS="When does my YohoMobile eSIM start?" />
            <Link5 whenWillIReceiveMyESIM="When will I receive my eSIM?" />
            <Link4 canIUseHotspottetheringWi="Can I use hotspot/tethering with eSIM?" />
            <Link5 whenWillIReceiveMyESIM="What phone supports eSIM?" />
            <Link6 whenDoesMyYohoMobileESIMS="How to install an eSIM?" />
            <Link6 whenDoesMyYohoMobileESIMS="Do I have to turn on my eSIM data roaming?" />
            <Link5 whenWillIReceiveMyESIM="What happens if I use up my data or my days of validity?" />
            <Link6 whenDoesMyYohoMobileESIMS="Can I top up the YohoMobile eSIM?" />
            <Link5 whenWillIReceiveMyESIM="When should I set up my eSIM?" />
            <Link4 canIUseHotspottetheringWi="How can I check my data balance?" />
            <Link4 canIUseHotspottetheringWi="How can I delete the YohoMobile eSIM once I've used up my data?" />
          </div>
          <div className="show-f-a-q">
            <u className="link-show1">Show all FAQs</u>
          </div>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
