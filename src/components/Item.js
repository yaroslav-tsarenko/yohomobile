import { useMemo } from "react";
import "./Item.css";

const Item = ({
  className = "",
  sVG,
  heading3DigitalConvenienc,
  withDigitalESIMsYouDontHa,
  cardsWhenYouTravel,
  propFlex,
  propMinWidth,
  propMargin,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const heading3Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={`item5 ${className}`}>
      <div className="svg-container">
        <img className="svg-icon1" loading="lazy" alt="" src={sVG} />
      </div>
      <div
        className="heading-3-digital-convenienc-parent"
        style={frameDiv3Style}
      >
        <h3 className="heading-310" style={heading3Style}>
          {heading3DigitalConvenienc}
        </h3>
        <p className="with-digital-esims-container">
          <span className="with-digital-esims">
            {withDigitalESIMsYouDontHa}
          </span>
          <span className="cards-when-you">{cardsWhenYouTravel}</span>
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  sVG: PropTypes.string,
  heading3DigitalConvenienc: PropTypes.string,
  withDigitalESIMsYouDontHa: PropTypes.string,
  cardsWhenYouTravel: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
};

export default Item;
