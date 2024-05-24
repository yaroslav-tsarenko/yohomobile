import { useMemo } from "react";
import "./Item2.css";

const Item2 = ({
  className = "",
  link,
  global96ESIM,
  yohoSpecial,
  prop,
  prop1,
  propWidth,
  propFlex,
  propMinWidth,
  propWidth1,
  propWidth2,
  propDisplay,
  propMinWidth1,
  propFlex1,
  propMinWidth2,
}) => {
  const item6Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const frameDiv12Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const div6Style = useMemo(() => {
    return {
      width: propWidth2,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propWidth2, propDisplay, propMinWidth1]);

  const frameDiv13Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const div7Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item47 ${className}`} style={item6Style}>
      <div className="container-wrapper6">
        <div className="container18">
          <img className="link-icon7" alt="" src={link} />
        </div>
      </div>
      <div className="global-96-esim-yoho-special-parent">
        <div className="global-96-esim-container">
          <p className="global-96-esim">{global96ESIM}</p>
          <p className="yoho-special">{yohoSpecial}</p>
        </div>
        <div className="parent5" style={frameDiv12Style}>
          <div className="div37" style={div6Style}>
            {prop}
          </div>
          <b className="b8">{` – `}</b>
          <div className="wrapper6" style={frameDiv13Style}>
            <div className="div38" style={div7Style}>
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item2.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  global96ESIM: PropTypes.string,
  yohoSpecial: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item2;
