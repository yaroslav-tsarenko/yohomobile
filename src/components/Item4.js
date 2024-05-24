import { useMemo } from "react";
import "./Item4.css";

const Item4 = ({
  className = "",
  link,
  linkHeading2AustraliaESIM,
  prop,
  prop1,
  propPadding,
  propMinWidth,
}) => {
  const item4Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const linkHeading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`item45 ${className}`} style={item4Style}>
      <div className="container-wrapper4">
        <div className="container16">
          <img className="link-icon5" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="link-heading-2-australia-e-parent">
        <b className="link-heading3" style={linkHeading3Style}>
          {linkHeading2AustraliaESIM}
        </b>
        <div className="frame-parent63">
          <div className="frame-parent64">
            <div className="wrapper4">
              <div className="div33">{prop}</div>
            </div>
            <b className="b6">{` – `}</b>
          </div>
          <div className="div34">{prop1}</div>
        </div>
      </div>
    </div>
  );
};

Item4.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  linkHeading2AustraliaESIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Item4;
