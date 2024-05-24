import { useCallback } from "react";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  const onItemLinkMenuClick = useCallback(() => {
    // Please sync "https://yohomobile.com/blog/ - 14/05/2024, 14:09:39 EEST" to the project
  }, []);

  const onItemLinkMenu1Click = useCallback(() => {
    // Please sync "https://yohomobile.com/blog/ - 14/05/2024, 14:09:39 EEST" to the project
  }, []);

  const onItemLinkMenu2Click = useCallback(() => {
    // Please sync "https://yohomobile.com/blog/ - 14/05/2024, 14:09:39 EEST" to the project
  }, []);

  return (
    <div className={`header-header-wrapper ${className}`}>
      <header className="header-header">
        <div className="overlay" />
        <div className="horizontalborder1">
          <div className="link-logo-bpng-wrapper">
            <img
              className="link-logo-bpng"
              loading="lazy"
              alt=""
              src="/link--logobpng@2x.png"
            />
          </div>
          <div className="frame-parent41">
            <div className="item-link-home-container">
              <a className="item-link2">Home</a>
            </div>
            <div className="item-link-menu" onClick={onItemLinkMenuClick}>
              <a className="buy-esim">Buy eSIM</a>
              <div className="image-wrapper12">
                <img className="image-icon20" alt="" src="/image@2x.png" />
              </div>
            </div>
            <div className="item-link-menu1" onClick={onItemLinkMenu1Click}>
              <a className="get-started">Get Started</a>
              <div className="image-wrapper13">
                <img className="image-icon21" alt="" src="/image-1@2x.png" />
              </div>
            </div>
            <div className="item-link-menu2" onClick={onItemLinkMenu2Click}>
              <a className="about-us2">About Us</a>
              <div className="image-wrapper14">
                <img className="image-icon22" alt="" src="/image-2@2x.png" />
              </div>
            </div>
            <div className="item-link-my-esimstopup-container">
              <a className="item-link3">My eSIMs/Topup</a>
            </div>
            <div className="item-link-cartpng-wrapper">
              <img
                className="item-link-cartpng"
                alt=""
                src="/item--link--cartpng@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
