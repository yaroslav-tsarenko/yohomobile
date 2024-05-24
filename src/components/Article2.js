import { useMemo } from "react";
import "./Article2.css";

const Article2 = ({
  className = "",
  container,
  photo20231108171540jpg,
  navigateRomeLikeALocalWha,
  doOnASunday,
  navigateRomeLikeALocalWha1,
  withARichHistoryCultureAn,
  globeSundaysThereAreDiffe,
  prop,
  propFlex,
  propAlignSelf,
  propHeight,
  propPadding,
  propMinWidth,
  propDebugCommit,
  propFlexDirection,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
}) => {
  const articleStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      height: propHeight,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propAlignSelf, propHeight, propPadding, propMinWidth]);

  const link3Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv5Style = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const frameDiv6Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const linkReadStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const paragraphHorizontalBorderStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  return (
    <div className={`article13 ${className}`} style={articleStyle}>
      <div className="link8" style={link3Style}>
        <div className="container-container" style={frameDiv5Style}>
          <img className="container-icon1" alt="" src={container} />
          <div className="gradient2" />
        </div>
        <div className="background12">
          <div className="travel-vacation3">{`Travel & Vacation`}</div>
        </div>
        <img
          className="photo-2023-11-08-17-15-40jpg-icon3"
          alt=""
          src={photo20231108171540jpg}
        />
      </div>
      <div className="frame-parent42" style={frameDiv6Style}>
        <div className="navigate-rome-like-a-local-wh-wrapper">
          <h1 className="navigate-rome-like-container">
            <p className="navigate-rome-like">{navigateRomeLikeALocalWha}</p>
            <p className="do-on-a">{doOnASunday}</p>
          </h1>
        </div>
        <div className="navigate-rome-like-a-local-wh-container">
          <p className="navigate-rome-like-container1">
            <span className="navigate-rome-like1">
              {navigateRomeLikeALocalWha1}
            </span>
            <span className="with-a-rich">{withARichHistoryCultureAn}</span>
            <span className="globe-sundays-there">
              {globeSundaysThereAreDiffe}
            </span>
          </p>
        </div>
        <div className="frame-parent43">
          <div className="link-read-more-about-navigat-wrapper">
            <b className="link-read2" style={linkReadStyle}>
              Read More »
            </b>
          </div>
          <div
            className="paragraphhorizontalborder2"
            style={paragraphHorizontalBorderStyle}
          >
            <div className="claudia2">{`Claudia `}</div>
            <div className="div6">•</div>
            <div className="div7">{prop}</div>
            <div className="div8">•</div>
            <div className="no-comments2"> No Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Article2.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  photo20231108171540jpg: PropTypes.string,
  navigateRomeLikeALocalWha: PropTypes.string,
  doOnASunday: PropTypes.string,
  navigateRomeLikeALocalWha1: PropTypes.string,
  withARichHistoryCultureAn: PropTypes.string,
  globeSundaysThereAreDiffe: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
};

export default Article2;
