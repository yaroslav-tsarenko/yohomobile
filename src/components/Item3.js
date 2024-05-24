import { useMemo } from "react";
import "./Item3.css";

const Item3 = ({
  className = "",
  link,
  southKorea,
  eSIM,
  prop,
  prop1,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const item5Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className={`item46 ${className}`} style={item5Style}>
      <div className="container-wrapper5">
        <div className="container17">
          <img className="link-icon6" alt="" src={link} />
        </div>
      </div>
      <div className="south-korea-esim-parent">
        <div className="south-korea-esim-container">
          <p className="south-korea">{southKorea}</p>
          <p className="esim2">{eSIM}</p>
        </div>
        <div className="frame-parent65">
          <div className="frame-parent66">
            <div className="wrapper5">
              <div className="div35">{prop}</div>
            </div>
            <b className="b7">{` – `}</b>
          </div>
          <div className="div36">{prop1}</div>
        </div>
      </div>
    </div>
  );
};

Item3.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  southKorea: PropTypes.string,
  eSIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Item3;
