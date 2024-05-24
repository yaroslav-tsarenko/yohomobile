import { useMemo } from "react";
import "./Article1.css";

const Article1 = ({
  className = "",
  container,
  photo20231108171540jpg,
  bestCitiesInItalyToVisitO,
  nextEuropeanEscapade,
  bestCitiesInItalyToVisitO1,
  onASpellBindingVoyageThro,
  andSquareIsALivingCanvasP,
  prop,
  propHeight,
  propPadding,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propDebugCommit,
  propFlexDirection,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const article1Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propPadding, propFlex, propMinWidth, propAlignSelf]);

  const link4Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv8Style = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const frameDiv9Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const linkRead2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const paragraphHorizontalBorder2Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className={`article14 ${className}`} style={article1Style}>
      <div className="link9" style={link4Style}>
        <div className="container-parent1" style={frameDiv8Style}>
          <img className="container-icon2" alt="" src={container} />
          <div className="gradient3" />
        </div>
        <div className="background13">
          <div className="travel-vacation4">{`Travel & Vacation`}</div>
        </div>
        <img
          className="photo-2023-11-08-17-15-40jpg-icon4"
          alt=""
          src={photo20231108171540jpg}
        />
      </div>
      <div className="frame-parent45" style={frameDiv9Style}>
        <div className="best-cities-in-italy-to-visit-wrapper">
          <h1 className="best-cities-in-container">
            <p className="best-cities-in">{bestCitiesInItalyToVisitO}</p>
            <p className="next-european-escapade">{nextEuropeanEscapade}</p>
          </h1>
        </div>
        <div className="best-cities-in-italy-to-visit-container">
          <p className="best-cities-in-container1">
            <span>
              <span className="best-cities-in1">
                {bestCitiesInItalyToVisitO1}
              </span>
              <span className="on-a-spell-binding">
                {onASpellBindingVoyageThro}
              </span>
              <span className="and-square-is">{andSquareIsALivingCanvasP}</span>
            </span>
          </p>
        </div>
        <div className="frame-parent46">
          <div className="link-read-more-about-best-ci-wrapper">
            <b className="link-read4" style={linkRead2Style}>
              Read More »
            </b>
          </div>
          <div
            className="paragraphhorizontalborder4"
            style={paragraphHorizontalBorder2Style}
          >
            <div className="claudia4">{`Claudia `}</div>
            <div className="div11">•</div>
            <div className="div12">{prop}</div>
            <div className="div13">•</div>
            <div className="no-comments4"> No Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Article1.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  photo20231108171540jpg: PropTypes.string,
  bestCitiesInItalyToVisitO: PropTypes.string,
  nextEuropeanEscapade: PropTypes.string,
  bestCitiesInItalyToVisitO1: PropTypes.string,
  onASpellBindingVoyageThro: PropTypes.string,
  andSquareIsALivingCanvasP: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
};

export default Article1;
