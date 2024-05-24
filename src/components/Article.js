import { useMemo } from "react";
import "./Article.css";

const Article = ({
  className = "",
  container,
  photo20231108171540jpg,
  heading3LinkTheBestESIMFo,
  howToChooseTheBestESIMFor,
  comeToTheWorldsMostVisite,
  franceHasToOfferButTheres,
  prop,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
  propTextDecoration,
}) => {
  const article2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const link6Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv11Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const heading31Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const howToChooseContainerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const div1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`article15 ${className}`} style={article2Style}>
      <div className="link11" style={link6Style}>
        <div className="container-parent2">
          <img className="container-icon3" alt="" src={container} />
          <div className="gradient5" />
        </div>
        <div className="background15">
          <div className="travel-vacation6">{`Travel & Vacation`}</div>
        </div>
        <img
          className="photo-2023-11-08-17-15-40jpg-icon6"
          alt=""
          src={photo20231108171540jpg}
        />
      </div>
      <div className="frame-parent51" style={frameDiv11Style}>
        <div className="frame-wrapper15">
          <div className="heading-3-link-the-best-es-parent">
            <h1 className="heading-331" style={heading31Style}>
              {heading3LinkTheBestESIMFo}
            </h1>
            <p
              className="how-to-choose-container"
              style={howToChooseContainerStyle}
            >
              <span className="how-to-choose">{howToChooseTheBestESIMFor}</span>
              <span className="come-to-the">{comeToTheWorldsMostVisite}</span>
              <span className="france-has-to">{franceHasToOfferButTheres}</span>
            </p>
          </div>
        </div>
        <div className="frame-parent52">
          <div className="link-read-more-about-the-bes-wrapper">
            <b className="link-read7">Read More »</b>
          </div>
          <div className="paragraphhorizontalborder7">
            <div className="claudia7">{`Claudia `}</div>
            <div className="div20">•</div>
            <div className="div21" style={div1Style}>
              {prop}
            </div>
            <div className="div22">•</div>
            <div className="no-comments7"> No Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  photo20231108171540jpg: PropTypes.string,
  heading3LinkTheBestESIMFo: PropTypes.string,
  howToChooseTheBestESIMFor: PropTypes.string,
  comeToTheWorldsMostVisite: PropTypes.string,
  franceHasToOfferButTheres: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
  propDebugCommit2: PropTypes.any,
  propDebugCommit3: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Article;
