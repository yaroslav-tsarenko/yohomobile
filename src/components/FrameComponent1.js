import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`section-container ${className}`}>
      <div className="section3">
        <div className="section-child">
          <div className="heading-1-is-your-device-com-parent">
            <h1 className="heading-1">Is Your Device Compatible?</h1>
            <p className="over-200-devices">
              Over 200 devices work with eSIM. Find out if yours pairs with Yoho
              Mobile eSIM.
            </p>
          </div>
        </div>
        <div className="frame-parent30">
          <div className="frame-wrapper12">
            <div className="frame-parent31">
              <div className="apple-parent">
                <b className="apple">Apple</b>
                <h3 className="item-samsung">Samsung</h3>
                <h3 className="item-google">Google Pixel</h3>
                <h3 className="item-others">Others</h3>
              </div>
              <div className="horizontal-divider-parent">
                <div className="horizontal-divider" />
                <div className="horizontal-divider1" />
              </div>
            </div>
          </div>
          <div className="frame-parent32">
            <div className="list-group">
              <div className="list2">
                <div className="item7">
                  <div className="image-wrapper">
                    <img
                      className="image-icon3"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                  <div className="iphone-15-15">
                    iPhone 15, 15 plus,15 Pro, 15 Pro Max
                  </div>
                </div>
                <div className="item8">
                  <div className="image-frame">
                    <img className="image-icon4" alt="" src="/image@2x.png" />
                  </div>
                  <div className="iphone-14-14">
                    iPhone 14, 14 Plus, Pro, 14 Pro Max
                  </div>
                </div>
                <div className="item9">
                  <img className="image-icon5" alt="" src="/image@2x.png" />
                  <p className="iphone-13-13-container">
                    <span className="iphone-13-13">
                      iPhone 13, 13 Mini, 13 Pro, 13 Pro Max, SE
                    </span>
                    <span className="span3">3 (2022)</span>
                  </p>
                </div>
                <div className="item10">
                  <div className="image-wrapper1">
                    <img className="image-icon6" alt="" src="/image@2x.png" />
                  </div>
                  <div className="iphone-12-12">
                    iPhone 12, 12 Mini, 12 Pro, 12 Pro Max
                  </div>
                </div>
                <div className="item11">
                  <div className="image-wrapper2">
                    <img className="image-icon7" alt="" src="/image@2x.png" />
                  </div>
                  <div className="iphone-11-11">
                    iPhone 11, 11 Pro, 11 Pro Max
                  </div>
                </div>
                <div className="item12">
                  <div className="image-wrapper3">
                    <img className="image-icon8" alt="" src="/image@2x.png" />
                  </div>
                  <div className="iphone-xs-xs">iPhone XS, XS Max, XR</div>
                </div>
                <div className="item13">
                  <div className="image-wrapper4">
                    <img className="image-icon9" alt="" src="/image@2x.png" />
                  </div>
                  <div className="iphone-se-2020">iPhone SE (2020, 2022)</div>
                </div>
                <div className="item14">
                  <img className="image-icon10" alt="" src="/image@2x.png" />
                  <p className="ipad-pro-11-inch-container">
                    <span className="ipad-pro-11-inch">
                      iPad Pro 11-inch (1st, 2nd and 3rd
                    </span>
                    <span className="generation">generation)</span>
                  </p>
                </div>
              </div>
              <div className="link-see-all-devices-wrapper">
                <u className="link-see">See all devices</u>
              </div>
            </div>
            <div className="list3">
              <div className="item15">
                <img className="image-icon11" alt="" src="/image@2x.png" />
                <p className="ipad-pro-129-inch-container">
                  <span className="ipad-pro-129-inch">
                    iPad Pro 12.9-inch (3rd, 4th and 5th
                  </span>
                  <span className="generation1">generation)</span>
                </p>
              </div>
              <div className="item16">
                <div className="image-wrapper5">
                  <img className="image-icon12" alt="" src="/image@2x.png" />
                </div>
                <div className="ipad-7th-8th">
                  iPad (7th, 8th and 9th generation)
                </div>
              </div>
              <div className="item17">
                <div className="image-wrapper6">
                  <img className="image-icon13" alt="" src="/image@2x.png" />
                </div>
                <div className="ipad-mini-5th">
                  iPad Mini (5th and 6th generation)
                </div>
              </div>
              <div className="item18">
                <div className="image-wrapper7">
                  <img className="image-icon14" alt="" src="/image@2x.png" />
                </div>
                <div className="apple-watch-series">
                  Apple watch series 3, 4, 5 and 6
                </div>
              </div>
              <div className="item19">
                <div className="image-wrapper8">
                  <img className="image-icon15" alt="" src="/image@2x.png" />
                </div>
                <div className="apple-watch-se">Apple watch SE</div>
              </div>
              <div className="item20">
                <img className="image-icon16" alt="" src="/image@2x.png" />
                <p className="ipad-pro-129-inch-container1">
                  <span className="ipad-pro-129-inch1">
                    iPad Pro 12.9-inch (3rd, 4th and 5th
                  </span>
                  <span className="generation2">generation)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="these-devices-are-not-esim-com-wrapper">
            <p className="these-devices-are-container">
              <span className="these-devices-are">
                *** These devices are not eSIM-compatible: iPhones from mainland
                China, Hong Kong and
              </span>
              <span className="macao-except-for">
                Macao (except for iPhone 13 mini, iPhone 12 mini, iPhone SE
                2020, and iPhone XS).
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
