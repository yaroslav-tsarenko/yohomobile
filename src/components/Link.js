import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  jppng,
  japan,
  prop,
  propDebugCommit,
  propAlignSelf,
  propFlex,
  propFlex1,
  propMinWidth,
  propDebugCommit1,
  propMinWidth1,
  onLinkContainer3Click,
}) => {
  const link1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propDebugCommit, propAlignSelf, propFlex]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const japanStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      debugCommit: propDebugCommit1,
    };
  }, [propMinWidth, propDebugCommit1]);

  const from18Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`link6 ${className}`}
      style={link1Style}
      onClick={onLinkContainer3Click}
    >
      <img className="jppng-icon" loading="lazy" alt="" src={jppng} />
      <div className="link-child" style={frameDiv2Style}>
        <div className="heading-5-group">
          <div className="heading-51">
            <b className="japan" style={japanStyle}>
              {japan}
            </b>
          </div>
          <div className="from-18" style={from18Style}>
            <span>{`From `}</span>
            <span className="span2">{prop}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  jppng: PropTypes.string,
  japan: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propMinWidth1: PropTypes.any,

  /** Action props */
  onLinkContainer3Click: PropTypes.func,
};

export default Link;
