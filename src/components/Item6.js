import { useMemo } from "react";
import "./Item6.css";

const Item6 = ({
  className = "",
  link,
  linkHeading2EuropeESIM,
  prop,
  prop1,
  propMinWidth,
  propFlex,
  propWidth,
  propPadding,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex,
      width: propWidth,
      padding: propPadding,
    };
  }, [propMinWidth, propFlex, propWidth, propPadding]);

  const linkHeading1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div5Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item43 ${className}`} style={item2Style}>
      <div className="container-wrapper2">
        <div className="container14">
          <img className="link-icon4" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="link-heading-2-europe-esim-parent">
        <b className="link-heading1" style={linkHeading1Style}>
          {linkHeading2EuropeESIM}
        </b>
        <div className="parent4">
          <div className="div29">{prop}</div>
          <b className="b4">{` – `}</b>
          <div className="wrapper2">
            <div className="div30" style={div5Style}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item6.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  linkHeading2EuropeESIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item6;
