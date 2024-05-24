import { useMemo } from "react";
import "./Item8.css";

const Item8 = ({
  className = "",
  link,
  linkHeading2IndonesiaESIM,
  prop,
  prop1,
  propPadding,
  propMinWidth,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
}) => {
  const itemStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  const linkHeadingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item41 ${className}`} style={itemStyle}>
      <div className="container-frame">
        <div className="container12">
          <img className="link-icon2" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="link-heading-2-indonesia-e-parent">
        <b className="link-heading" style={linkHeadingStyle}>
          {linkHeading2IndonesiaESIM}
        </b>
        <div className="frame-parent57">
          <div className="frame-parent58">
            <div className="frame">
              <div className="div25" style={div2Style}>
                {prop}
              </div>
            </div>
            <b className="b2">{` – `}</b>
          </div>
          <div className="div26">{prop1}</div>
        </div>
      </div>
    </div>
  );
};

Item8.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  linkHeading2IndonesiaESIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item8;
