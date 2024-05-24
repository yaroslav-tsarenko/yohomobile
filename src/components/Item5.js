import { useMemo } from "react";
import "./Item5.css";

const Item5 = ({
  className = "",
  card36300x267png,
  linkHeading2ChinaESIM,
  prop,
  prop1,
  propPadding,
  propMinWidth,
  propFlex,
  propWidth,
  propMinWidth1,
}) => {
  const item3Style = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
      flex: propFlex,
      width: propWidth,
    };
  }, [propPadding, propMinWidth, propFlex, propWidth]);

  const linkHeading2Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item44 ${className}`} style={item3Style}>
      <div className="container-wrapper3">
        <div className="container15">
          <div className="link15">
            <img
              className="card-36-300x267png-icon"
              loading="lazy"
              alt=""
              src={card36300x267png}
            />
            <b className="k">k</b>
          </div>
        </div>
      </div>
      <div className="link-heading-2-china-esim-parent">
        <b className="link-heading2" style={linkHeading2Style}>
          {linkHeading2ChinaESIM}
        </b>
        <div className="frame-parent61">
          <div className="frame-parent62">
            <div className="wrapper3">
              <div className="div31">{prop}</div>
            </div>
            <b className="b5">{` – `}</b>
          </div>
          <div className="div32">{prop1}</div>
        </div>
      </div>
    </div>
  );
};

Item5.propTypes = {
  className: PropTypes.string,
  card36300x267png: PropTypes.string,
  linkHeading2ChinaESIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Item5;
