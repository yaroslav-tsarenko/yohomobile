import { useMemo } from "react";
import "./Link3.css";

const Link3 = ({
  className = "",
  container,
  photo20231108171540jpg,
  propDebugCommit,
  propFlexDirection,
}) => {
  const link2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv4Style = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  return (
    <div className={`link7 ${className}`} style={link2Style}>
      <div className="container-group" style={frameDiv4Style}>
        <img className="container-icon" alt="" src={container} />
        <div className="gradient1" />
      </div>
      <div className="background11">
        <div className="travel-vacation2">{`Travel & Vacation`}</div>
      </div>
      <img
        className="photo-2023-11-08-17-15-40jpg-icon2"
        loading="lazy"
        alt=""
        src={photo20231108171540jpg}
      />
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  photo20231108171540jpg: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propFlexDirection: PropTypes.any,
};

export default Link3;
