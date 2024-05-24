import { useMemo } from "react";
import "./Link2.css";

const Link2 = ({
  className = "",
  scaledE1703301274,
  photo20231108171540jpg,
  propDebugCommit,
  propHeight,
  propBottom,
}) => {
  const link5Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const scaledE1703301274480600x355IconStyle = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
    };
  }, [propHeight, propBottom]);

  return (
    <div className={`link10 ${className}`} style={link5Style}>
      <div className="container5">
        <div className="gradient4" />
        <div className="scaled-e1703301274480-600x355-parent">
          <img
            className="scaled-e1703301274480-600x355-icon"
            alt=""
            src={scaledE1703301274}
            style={scaledE1703301274480600x355IconStyle}
          />
          <div className="background14">
            <div className="travel-vacation5">{`Travel & Vacation`}</div>
          </div>
        </div>
      </div>
      <img
        className="photo-2023-11-08-17-15-40jpg-icon5"
        alt=""
        src={photo20231108171540jpg}
      />
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  scaledE1703301274: PropTypes.string,
  photo20231108171540jpg: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propHeight: PropTypes.any,
  propBottom: PropTypes.any,
};

export default Link2;
