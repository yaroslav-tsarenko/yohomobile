import { useMemo } from "react";
import "./Item7.css";

const Item7 = ({
  className = "",
  link,
  unitedStates,
  uSAREAL,
  uNLIMITEDESIM,
  prop,
  prop1,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const item1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div4Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`item42 ${className}`} style={item1Style}>
      <div className="container-wrapper1">
        <div className="container13">
          <img className="link-icon3" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="united-states-usa-real-unlim-parent">
        <div className="united-states-usa-container1">
          <p className="united-states">{unitedStates}</p>
          <p className="usa-real">{uSAREAL}</p>
          <p className="unlimited-esim">{uNLIMITEDESIM}</p>
        </div>
        <div className="frame-parent59">
          <div className="frame-parent60">
            <div className="wrapper1">
              <div className="div27" style={div3Style}>
                {prop}
              </div>
            </div>
            <b className="b3">{` – `}</b>
          </div>
          <div className="div28" style={div4Style}>
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

Item7.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  unitedStates: PropTypes.string,
  uSAREAL: PropTypes.string,
  uNLIMITEDESIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Item7;
