import { useMemo } from "react";
import "./Link1.css";

const Link1 = ({
  className = "",
  khpng,
  cambodia,
  prop,
  propDebugCommit,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propWidth1,
  propMinWidth,
}) => {
  const linkStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const heading5Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const cambodiaStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const from6Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link5 ${className}`} style={linkStyle}>
      <img className="khpng-icon" loading="lazy" alt="" src={khpng} />
      <div className="link-inner" style={frameDivStyle}>
        <div className="heading-5-parent" style={frameDiv1Style}>
          <div className="heading-5" style={heading5Style}>
            <b className="cambodia" style={cambodiaStyle}>
              {cambodia}
            </b>
          </div>
          <div className="from-6" style={from6Style}>
            <span>{`From `}</span>
            <span className="span1">{prop}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  khpng: PropTypes.string,
  cambodia: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Link1;
