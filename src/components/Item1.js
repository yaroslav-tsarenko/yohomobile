import { useMemo } from "react";
import "./Item1.css";

const Item1 = ({
  className = "",
  link,
  netherlands,
  prop,
  prop1,
  propMinWidth,
}) => {
  const item7Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`item48 ${className}`} style={item7Style}>
      <div className="container-wrapper7">
        <div className="container19">
          <img className="link-icon8" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="netherlands-esim-parent">
        <b className="netherlands-esim">
          <span className="netherlands-esim-txt-container">
            <p className="netherlands">{netherlands}</p>
            <p className="esim3">eSIM</p>
          </span>
        </b>
        <div className="parent6">
          <div className="div39">{prop}</div>
          <b className="b9">{` – `}</b>
          <div className="wrapper7">
            <div className="div40">{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  netherlands: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Item1;
