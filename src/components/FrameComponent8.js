import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  className = "",
  aroundTheWorldIn10Traditi,
  christmasDinner,
  aroundTheWorldIn10Traditi1,
  tripAroundTheWorldOurCuli,
  realmsOfTraditionalChrist,
  prop,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propTextDecoration,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const linkRead3Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const paragraphHorizontalBorder3Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const divStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`frame-parent47 ${className}`} style={frameDiv10Style}>
      <div className="around-the-world-in-10-traditi-wrapper">
        <h1 className="around-the-world-container">
          <p className="around-the-world">{aroundTheWorldIn10Traditi}</p>
          <p className="christmas-dinner">{christmasDinner}</p>
        </h1>
      </div>
      <div className="around-the-world-in-10-traditi-container">
        <p className="around-the-world-container1">
          <span className="around-the-world1">
            {aroundTheWorldIn10Traditi1}
          </span>
          <span className="trip-around-the">{tripAroundTheWorldOurCuli}</span>
          <span className="realms-of-traditional">
            {realmsOfTraditionalChrist}
          </span>
        </p>
      </div>
      <div className="frame-parent48">
        <div className="link-read-more-about-around-wrapper">
          <b className="link-read5" style={linkRead3Style}>
            Read More »
          </b>
        </div>
        <div
          className="paragraphhorizontalborder5"
          style={paragraphHorizontalBorder3Style}
        >
          <div className="claudia5">{`Claudia `}</div>
          <div className="div14">•</div>
          <div className="div15" style={divStyle}>
            {prop}
          </div>
          <div className="div16">•</div>
          <div className="no-comments5"> No Comments</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  aroundTheWorldIn10Traditi: PropTypes.string,
  christmasDinner: PropTypes.string,
  aroundTheWorldIn10Traditi1: PropTypes.string,
  tripAroundTheWorldOurCuli: PropTypes.string,
  realmsOfTraditionalChrist: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default FrameComponent8;
