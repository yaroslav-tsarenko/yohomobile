import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`section-wrapper ${className}`}>
      <div className="section1">
        <img className="image-icon2" alt="" src="/image@2x.png" />
        <div className="stay-connected-anytime-and-any-parent">
          <h1 className="stay-connected-anytime-container">
            <p className="stay-connected">Stay Connected</p>
            <p className="anytime-and-anywhere">Anytime and Anywhere</p>
          </h1>
          <b className="yoho-mobile-esim-container">
            <p className="yoho-mobile-esim">
              Yoho Mobile eSIM: Unlock the Ultimate Digital Travel Companion for
              Seamless Global
            </p>
            <p className="exploration">Exploration</p>
          </b>
          <div className="input1">
            <div className="where-do-you">
              Where do you want to travel next?
            </div>
          </div>
          <u className="link-can">Can my phone use eSIM?</u>
        </div>
        <div className="stay-connected-with-yoho-mobil-parent">
          <p className="stay-connected-with-container">
            <span className="stay-connected-with">
              Stay Connected with Yoho Mobile APP!
            </span>
            <span className="quickly-check-your">
              Quickly check your remaining data and receive alerts before you
              run out.
            </span>
          </p>
          <div className="link-group">
            <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
            <img
              className="link-google-playsvg"
              loading="lazy"
              alt=""
              src="/link--googleplaysvg.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
