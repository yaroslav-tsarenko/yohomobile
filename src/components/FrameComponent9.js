import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  className = "",
  dataPreprocessing,
  propAlignSelf,
  propFlex,
  propDebugCommit,
  propDebugCommit1,
  propTextDecoration,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const linkRead1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const paragraphHorizontalBorder1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const dataPreprocessingStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`frame-parent44 ${className}`} style={frameDiv7Style}>
      <div className="link-read-more-about-rome-on-wrapper">
        <b className="link-read3" style={linkRead1Style}>
          Read More »
        </b>
      </div>
      <div
        className="paragraphhorizontalborder3"
        style={paragraphHorizontalBorder1Style}
      >
        <div className="claudia3">{`Claudia `}</div>
        <div className="div9">•</div>
        <div className="data-preprocessing" style={dataPreprocessingStyle}>
          {dataPreprocessing}
        </div>
        <div className="div10">•</div>
        <div className="no-comments3"> No Comments</div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  dataPreprocessing: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default FrameComponent9;
